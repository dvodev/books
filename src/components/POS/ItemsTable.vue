<template>
  <!-- Add a dropdown for selecting the priceList -->
  <div class="flex items-center justify-between pe-2 rounded rounded focus-within:bg-gray-100 border border-gray-200 bg-gray-25">
    <div class="placeholder-option">
      {{ selectedPriceList ? selectedPriceList : 'Select Price List:' }}
    </div>
    <select class="text-base focus:outline-none w-full placeholder-gray-500 px-3 py-2 text-gray-900 bg-transparent" v-model="selectedPriceList" @change="loadItems">
      <option disabled value="" hidden></option>
      <option v-for="pl in priceLists" :key="pl.name" :value="pl.name">{{ pl.name }}</option>
    </select>
  </div>

<!-- Add a Row for displaying column labels -->
<Row :ratio="ratio" class="border flex items-center mt-4 px-2 rounded-t-md text-gray-600 w-full sticky top-0 bg-white z-10">
  <div v-for="df in tableFields" :key="df.fieldname" class="flex items-center px-2 py-2 text-lg" :class="{
    'ms-auto': isNumeric(df as Field),
  }" :style="{ height: '2rem', minWidth: '50px', flex: '1 0 auto' }"> <!-- Adjust the minWidth value as needed -->
    {{ df.label }}
  </div>
</Row>

<div class="overflow-y-auto" style="height: 72.5vh; display: flex; flex-direction: column;">

  <!-- Rows for displaying data -->
  <Row
    v-if="items"
    v-for="row in items"
    :key="row.name"
    :ratio="ratio"
    :border="true"
    class="border-b border-l border-r flex group h-row-mid hover:bg-gray-25 items-center justify-center px-2 w-full"
    @click="handleChange(row as POSItem)"
    >
    <div
    v-for="(df, index) in tableFields"
    :key="df.fieldname"
    class="resizable-column"
    :style="{ minWidth: columnWidths[index] + 'px', flex: '1 0 auto', marginRight: index === 1 ? '20px' : '0' }"
    @mousedown.prevent="startResizing($event, index)"
  >
    <FormControl
      :df="df"
      :value="(row as any)[df.fieldname]"
      :readOnly="true"
    />
    <div
      class="resize-handle"
      @mousedown.prevent="startResizing($event, index)"
    ></div>
  </div>
    </Row>
  </div>
</template>
<script lang="ts">
import FormControl from '../Controls/FormControl.vue';
import Row from 'src/components/Row.vue';
import { isNumeric } from 'src/utils';
import { fyo } from 'src/initFyo';
import { ModelNameEnum } from 'models/types';
import { Field } from 'schemas/types';
import { ItemQtyMap } from './types';
import { Item } from 'models/baseModels/Item/Item';
import { POSItem } from './types';
import { Money } from 'pesa';
import { PropType, defineComponent, ref, inject, watch, onMounted } from 'vue';
import { SalesInvoice } from 'models/baseModels/SalesInvoice/SalesInvoice';
import { PriceList } from 'models/baseModels/PriceList/PriceList';

export default defineComponent({
  name: 'ItemsTable',
  components: { FormControl, Row },
  emits: ['onAddItem', 'updateValues'],
  methods: {
    updateSelectedPriceList(selectedPL: string) {
      this.selectedPriceList = selectedPL;
      this.loadItems();
    }
  },
  props: {
    sinvDoc: Object as () => SalesInvoice,
    priceList: String,
  },
  setup(props, { emit }) {
    const itemQtyMap = inject('itemQtyMap') as ItemQtyMap;
    const selectedPriceList = ref(props.priceList || '');
    const priceLists = ref([] as PriceList[]);
    const items = ref([] as POSItem[]);
    const columnWidths = ref([250, 100, 20, 100]); // Initial widths for each column

    const startResizing = (event: MouseEvent, index: number) => {
      const startX = event.clientX;
      const initialWidth = columnWidths.value[index];

      const handleMouseMove = (e: MouseEvent) => {
        const newWidth = Math.max(100, initialWidth + e.clientX - startX);
        columnWidths.value[index] = newWidth;
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };
    // Load available priceLists when the component is mounted or when the priceList prop changes
    const loadPriceLists = async () => {
      try {
        // Fetch available priceLists and update the priceLists array
        priceLists.value = (await fyo.db.getAll(ModelNameEnum.PriceList, {
          fields: [],
        })) as PriceList[];
      } catch (error) {
        console.error('Error loading priceLists:', error);
      }
    };

    // Load items when the selectedPriceList changes
    const loadItems = async () => {
      try {
        const pl = await fyo.doc.getDoc(
          ModelNameEnum.PriceList,
          selectedPriceList.value
        );
        // Fetch items based on the selected priceList and update the items array
        const itemsData = (await fyo.db.getAll(ModelNameEnum.Item, {
          fields: [],
        })) as Item[];

        items.value = itemsData.map((item) => {
          let availableQty = 1;

          if (itemQtyMap[item.name as string]) {
            availableQty = itemQtyMap[item.name as string].availableQty;
          }
          const plItem = Array.isArray(pl.priceListItem)
            ? pl.priceListItem.find((pli: { item: any }) => pli.item === item.name)
            : undefined;

          // Ensure that the 'unit' property is assigned a string value
          const posItem: POSItem = {
            name: item.name || '',
            rate: plItem?.rate?.float !== undefined ? plItem.rate : fyo.pesa(0),
            unit: item.unit as string || '', // Make sure 'item.unit' is a string
            hasBatch: !!item.hasBatch,
            hasSerialNumber: !!item.hasSerialNumber,
            priceList: selectedPriceList.value,
            availableQty,
          };

          return posItem;
        });
      } catch (error) {
        console.error('Error loading items:', error);
      }
    };

    // Watch for changes in the priceList prop and load items accordingly
    watch(() => props.priceList, (newValue) => {
      selectedPriceList.value = newValue || '';
      loadItems();
    });

    // Load priceLists when the component is mounted
    loadPriceLists();

    const ratio = [1, 1, 1, 0.7];

    const tableFields = [
      {
        fieldname: 'name',
        fieldtype: 'Data',
        label: 'Item',
        placeholder: 'Item',
        readOnly: true,
      },
      {
        fieldname: 'rate',
        label: 'Rate',
        placeholder: 'Rate',
        fieldtype: 'Currency',
        readOnly: true,
      },
      {
        fieldname: 'unit',
        label: 'Unit',
        placeholder: 'Unit',
        fieldtype: 'Data',
        target: 'UOM',
        readOnly: true,
      },
      {
        fieldname: 'priceList',
        label: 'Price List',
        placeholder: 'Price List',
        fieldtype: 'Link',
        target: 'PriceList',
        readOnly: true,
      },
    ] as Field[];

    const handleChange = (value: POSItem) => {
      emit('onAddItem', value);
      emit('updateValues');
    };

    return {
      itemQtyMap,
      selectedPriceList,
      priceLists,
      items,
      ratio,
      tableFields,
      isNumeric,
      handleChange,
      loadItems,
      columnWidths,
      startResizing,
    };
  },
});
</script>
<style scoped>
.resizable-column {
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
}
  /* Style for the placeholder option */
.placeholder-option {
  color: #a0aec0; /* Placeholder color */
  /* padding: 0.375rem 1rem; */
  /* Remove new lines in the default selected option */
  white-space: nowrap;

 }

</style>