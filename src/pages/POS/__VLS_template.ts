import Button from 'src/components/Button.vue';
import ClosePOSShiftModal from './ClosePOSShiftModal.vue';
import FloatingLabelCurrencyInput from 'src/components/POS/FloatingLabelCurrencyInput.vue';
import FloatingLabelFloatInput from 'src/components/POS/FloatingLabelFloatInput.vue';
import ItemsTable from 'src/components/POS/ItemsTable.vue';
import Link from 'src/components/Controls/Link.vue';
import OpenPOSShiftModal from './OpenPOSShiftModal.vue';
import PageHeader from 'src/components/PageHeader.vue';
import PaymentModal from './PaymentModal.vue';
import SelectedItemTable from 'src/components/POS/SelectedItemTable.vue';
import { t } from 'fyo';
import { Money } from 'pesa';
import { getItem } from 'src/utils/pos';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './POS.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'PageHeader', typeof __VLS_localComponents, "PageHeader", "PageHeader", "PageHeader"> &
__VLS_WithComponent<'Button', typeof __VLS_localComponents, "Button", "Button", "Button"> &
__VLS_WithComponent<'OpenPOSShiftModal', typeof __VLS_localComponents, "OpenPOSShiftModal", "OpenPOSShiftModal", "OpenPOSShiftModal"> &
__VLS_WithComponent<'ClosePOSShiftModal', typeof __VLS_localComponents, "ClosePOSShiftModal", "ClosePOSShiftModal", "ClosePOSShiftModal"> &
__VLS_WithComponent<'PaymentModal', typeof __VLS_localComponents, "PaymentModal", "PaymentModal", "PaymentModal"> &
__VLS_WithComponent<'Link', typeof __VLS_localComponents, "Link", "Link", "Link"> &
__VLS_WithComponent<'ItemsTable', typeof __VLS_localComponents, "ItemsTable", "ItemsTable", "ItemsTable"> &
__VLS_WithComponent<'SelectedItemTable', typeof __VLS_localComponents, "SelectedItemTable", "SelectedItemTable", "SelectedItemTable"> &
__VLS_WithComponent<'FloatingLabelFloatInput', typeof __VLS_localComponents, "FloatingLabelFloatInput", "FloatingLabelFloatInput", "FloatingLabelFloatInput"> &
__VLS_WithComponent<'FloatingLabelCurrencyInput', typeof __VLS_localComponents, "FloatingLabelCurrencyInput", "FloatingLabelCurrencyInput", "FloatingLabelCurrencyInput">;
({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div; ({} as __VLS_IntrinsicElements).div;
__VLS_components.PageHeader; __VLS_components.PageHeader;
// @ts-ignore
[PageHeader, PageHeader,];
__VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button; __VLS_components.Button;
// @ts-ignore
[Button, Button, Button, Button, Button, Button,];
({} as __VLS_IntrinsicElements).span; ({} as __VLS_IntrinsicElements).span;
__VLS_components.OpenPOSShiftModal;
// @ts-ignore
[OpenPOSShiftModal,];
__VLS_components.ClosePOSShiftModal;
// @ts-ignore
[ClosePOSShiftModal,];
__VLS_components.PaymentModal;
// @ts-ignore
[PaymentModal,];
__VLS_components.Link; __VLS_components.Link;
// @ts-ignore
[Link, Link,];
__VLS_components.ItemsTable;
// @ts-ignore
[ItemsTable,];
__VLS_components.SelectedItemTable;
// @ts-ignore
[SelectedItemTable,];
__VLS_components.FloatingLabelFloatInput;
// @ts-ignore
[FloatingLabelFloatInput,];
__VLS_components.FloatingLabelCurrencyInput; __VLS_components.FloatingLabelCurrencyInput; __VLS_components.FloatingLabelCurrencyInput;
// @ts-ignore
[FloatingLabelCurrencyInput, FloatingLabelCurrencyInput, FloatingLabelCurrencyInput,];
({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p; ({} as __VLS_IntrinsicElements).p;
{
const __VLS_0 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_2 = __VLS_1({ ...{ ...{}, class: (""), }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
{
let __VLS_4!: 'PageHeader' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.PageHeader : (typeof __VLS_resolvedLocalAndGlobalComponents)['PageHeader'];
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({ ...{}, title: ((__VLS_ctx.t`Point of Sale`)), }));
({} as { PageHeader: typeof __VLS_4; }).PageHeader;
({} as { PageHeader: typeof __VLS_4; }).PageHeader;
const __VLS_6 = __VLS_5({ ...{ ...{}, title: ((__VLS_ctx.t`Point of Sale`)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_7 = __VLS_pickFunctionalComponentCtx(__VLS_4, __VLS_6)!;
{
let __VLS_8!: 'Slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Slot : 'slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.slot : (typeof __VLS_resolvedLocalAndGlobalComponents)['slot'];
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{}, }));
const __VLS_10 = __VLS_9({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
var __VLS_11 = {};
{
let __VLS_12!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ onClick: {} as any, }, class: ("bg-red-500"), }));
({} as { Button: typeof __VLS_12; }).Button;
({} as { Button: typeof __VLS_12; }).Button;
const __VLS_14 = __VLS_13({ ...{ ...{ onClick: {} as any, }, class: ("bg-red-500"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
const __VLS_15 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)!;
let __VLS_16 = { 'click': __VLS_pickEvent(__VLS_15.emit!, 'click' as const, __VLS_componentProps(__VLS_13, __VLS_14).onClick) };
__VLS_16 = {
click: $event => {
__VLS_ctx.toggleModal('ShiftClose');
}
};
{
const __VLS_17 = ({} as __VLS_IntrinsicElements)["span"];
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, {});
({} as __VLS_IntrinsicElements).span;
({} as __VLS_IntrinsicElements).span;
const __VLS_19 = __VLS_18({ ...{ ...{}, class: ("font-medium text-white"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_18));
const __VLS_20 = __VLS_pickFunctionalComponentCtx(__VLS_17, __VLS_19)!;
(__VLS_ctx.t`Close POS Shift `);
(__VLS_20.slots!).default;
}
(__VLS_15.slots!).default;
}
(__VLS_7.slots!).default;
}
(__VLS_7.slots!).default;
}
if (!__VLS_ctx.isPosShiftOpen) {
{
let __VLS_21!: 'OpenPOSShiftModal' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.OpenPOSShiftModal : (typeof __VLS_resolvedLocalAndGlobalComponents)['OpenPOSShiftModal'];
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{ onToggleModal: {} as any, }, openModal: ((!__VLS_ctx.isPosShiftOpen)), }));
({} as { OpenPOSShiftModal: typeof __VLS_21; }).OpenPOSShiftModal;
const __VLS_23 = __VLS_22({ ...{ ...{ onToggleModal: {} as any, }, openModal: ((!__VLS_ctx.isPosShiftOpen)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_22));
const __VLS_24 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23)!;
let __VLS_25 = { 'toggle-modal': __VLS_pickEvent(__VLS_24.emit!, 'toggle-modal' as const, __VLS_componentProps(__VLS_22, __VLS_23).onToggleModal) };
__VLS_25 = {
"toggle-modal": (__VLS_ctx.toggleModal)
};
}
// @ts-ignore
[t, t, toggleModal, t, isPosShiftOpen, isPosShiftOpen, isPosShiftOpen, toggleModal,];
}
{
let __VLS_26!: 'ClosePOSShiftModal' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ClosePOSShiftModal : (typeof __VLS_resolvedLocalAndGlobalComponents)['ClosePOSShiftModal'];
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ onToggleModal: {} as any, }, openModal: ((__VLS_ctx.openShiftCloseModal)), }));
({} as { ClosePOSShiftModal: typeof __VLS_26; }).ClosePOSShiftModal;
const __VLS_28 = __VLS_27({ ...{ ...{ onToggleModal: {} as any, }, openModal: ((__VLS_ctx.openShiftCloseModal)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28)!;
let __VLS_30 = { 'toggle-modal': __VLS_pickEvent(__VLS_29.emit!, 'toggle-modal' as const, __VLS_componentProps(__VLS_27, __VLS_28).onToggleModal) };
__VLS_30 = {
"toggle-modal": (__VLS_ctx.toggleModal)
};
}
{
let __VLS_31!: 'PaymentModal' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.PaymentModal : (typeof __VLS_resolvedLocalAndGlobalComponents)['PaymentModal'];
const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({ ...{ onCreateTransaction: {} as any, onToggleModal: {} as any, onSetCashAmount: {} as any, onSetTransferAmount: {} as any, onSetTransferRefNo: {} as any, onSetTransferClearanceDate: {} as any, }, openModal: ((__VLS_ctx.openPaymentModal)), }));
({} as { PaymentModal: typeof __VLS_31; }).PaymentModal;
const __VLS_33 = __VLS_32({ ...{ ...{ onCreateTransaction: {} as any, onToggleModal: {} as any, onSetCashAmount: {} as any, onSetTransferAmount: {} as any, onSetTransferRefNo: {} as any, onSetTransferClearanceDate: {} as any, }, openModal: ((__VLS_ctx.openPaymentModal)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_32));
const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_31, __VLS_33)!;
let __VLS_35 = { 'create-transaction': __VLS_pickEvent(__VLS_34.emit!, 'create-transaction' as const, __VLS_componentProps(__VLS_32, __VLS_33).onCreateTransaction) };
__VLS_35 = {
"create-transaction": (__VLS_ctx.createTransaction)
};
let __VLS_36 = { 'toggle-modal': __VLS_pickEvent(__VLS_34.emit!, 'toggle-modal' as const, __VLS_componentProps(__VLS_32, __VLS_33).onToggleModal) };
__VLS_36 = {
"toggle-modal": (__VLS_ctx.toggleModal)
};
let __VLS_37 = { 'set-cash-amount': __VLS_pickEvent(__VLS_34.emit!, 'set-cash-amount' as const, __VLS_componentProps(__VLS_32, __VLS_33).onSetCashAmount) };
__VLS_37 = {
"set-cash-amount": (__VLS_ctx.setCashAmount)
};
let __VLS_38 = { 'set-transfer-amount': __VLS_pickEvent(__VLS_34.emit!, 'set-transfer-amount' as const, __VLS_componentProps(__VLS_32, __VLS_33).onSetTransferAmount) };
__VLS_38 = {
"set-transfer-amount": (__VLS_ctx.setTransferAmount)
};
let __VLS_39 = { 'set-transfer-ref-no': __VLS_pickEvent(__VLS_34.emit!, 'set-transfer-ref-no' as const, __VLS_componentProps(__VLS_32, __VLS_33).onSetTransferRefNo) };
__VLS_39 = {
"set-transfer-ref-no": (__VLS_ctx.setTransferRefNo)
};
let __VLS_40 = { 'set-transfer-clearance-date': __VLS_pickEvent(__VLS_34.emit!, 'set-transfer-clearance-date' as const, __VLS_componentProps(__VLS_32, __VLS_33).onSetTransferClearanceDate) };
__VLS_40 = {
"set-transfer-clearance-date": (__VLS_ctx.setTransferClearanceDate)
};
}
{
const __VLS_41 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_43 = __VLS_42({ ...{ ...{}, class: ("bg-gray-25 gap-2 grid grid-cols-12 p-4"), style: ({}), }, }, ...__VLS_functionalComponentArgsRest(__VLS_42));
const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_41, __VLS_43)!;
{
const __VLS_45 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_47 = __VLS_46({ ...{ ...{}, class: ("bg-white border col-span-5 rounded-md"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_46));
const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
{
const __VLS_49 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_51 = __VLS_50({ ...{ ...{}, class: ("rounded-md p-4 col-span-5"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_50));
const __VLS_52 = __VLS_pickFunctionalComponentCtx(__VLS_49, __VLS_51)!;
{
let __VLS_53!: 'Link' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Link : (typeof __VLS_resolvedLocalAndGlobalComponents)['Link'];
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
...{ onKeyup: {} as any, onChange: {} as any, }, class: ("border-r flex-shrink-0 w-full"), df: (({
label: __VLS_ctx.t`Search an Item`,
fieldtype: 'Link',
fieldname: 'item',
target: 'Item',
})), border: ((true)), value: ((__VLS_ctx.itemSearchTerm)),
}));
({} as { Link: typeof __VLS_53; }).Link;
const __VLS_55 = __VLS_54({
...{
...{ onKeyup: {} as any, onChange: {} as any, }, class: ("border-r flex-shrink-0 w-full"), df: (({
label: __VLS_ctx.t`Search an Item`,
fieldtype: 'Link',
fieldname: 'item',
target: 'Item',
})), border: ((true)), value: ((__VLS_ctx.itemSearchTerm)),
},
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_53, __VLS_55)!;
let __VLS_57 = { 'keyup': __VLS_pickEvent(__VLS_56.emit!, 'keyup' as const, __VLS_componentProps(__VLS_54, __VLS_55).onKeyup) };
__VLS_57 = {
keyup: (async () => await __VLS_ctx.addItem(await __VLS_ctx.getItem(__VLS_ctx.itemSearchTerm)))
};
let __VLS_58 = { 'change': __VLS_pickEvent(__VLS_56.emit!, 'change' as const, __VLS_componentProps(__VLS_54, __VLS_55).onChange) };
__VLS_58 = {
change: ((item: string) => __VLS_ctx.itemSearchTerm = item)
};
}
{
let __VLS_59!: 'ItemsTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.ItemsTable : (typeof __VLS_resolvedLocalAndGlobalComponents)['ItemsTable'];
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({ ...{ onAddItem: {} as any, }, df: (({ type: Object, required: true })), value: (({ type: [String, Number], required: true })), readOnly: ((true)), sinvDoc: ((__VLS_ctx.sinvDoc)), }));
({} as { ItemsTable: typeof __VLS_59; }).ItemsTable;
const __VLS_61 = __VLS_60({ ...{ ...{ onAddItem: {} as any, }, df: (({ type: Object, required: true })), value: (({ type: [String, Number], required: true })), readOnly: ((true)), sinvDoc: ((__VLS_ctx.sinvDoc)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_60));
const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_59, __VLS_61)!;
let __VLS_63 = { 'onAddItem': __VLS_pickEvent(__VLS_62.emit!, 'onAddItem' as const, __VLS_componentProps(__VLS_60, __VLS_61).onAddItem) };
__VLS_63 = {
onAddItem: (__VLS_ctx.addItem)
};
}
(__VLS_52.slots!).default;
}
(__VLS_48.slots!).default;
}
{
const __VLS_64 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_66 = __VLS_65({ ...{ ...{}, class: ("col-span-7"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_65));
const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66)!;
{
const __VLS_68 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_70 = __VLS_69({ ...{ ...{}, class: ("flex flex-col gap-3"), style: ({}), }, }, ...__VLS_functionalComponentArgsRest(__VLS_69));
const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70)!;
{
const __VLS_72 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_74 = __VLS_73({ ...{ ...{}, class: ("bg-white border grow h-full p-4 rounded-md"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74)!;
if (__VLS_ctx.sinvDoc.fieldMap) {
{
let __VLS_76!: 'Link' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Link : (typeof __VLS_resolvedLocalAndGlobalComponents)['Link'];
const __VLS_77 = __VLS_asFunctionalComponent(__VLS_76, new __VLS_76({ ...{ onChange: {} as any, }, class: ("flex-shrink-0"), border: ((true)), value: ((__VLS_ctx.sinvDoc.party)), df: ((__VLS_ctx.sinvDoc.fieldMap.party)), }));
({} as { Link: typeof __VLS_76; }).Link;
const __VLS_78 = __VLS_77({ ...{ ...{ onChange: {} as any, }, class: ("flex-shrink-0"), border: ((true)), value: ((__VLS_ctx.sinvDoc.party)), df: ((__VLS_ctx.sinvDoc.fieldMap.party)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_77));
const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_76, __VLS_78)!;
let __VLS_80 = { 'change': __VLS_pickEvent(__VLS_79.emit!, 'change' as const, __VLS_componentProps(__VLS_77, __VLS_78).onChange) };
__VLS_80 = {
change: ((value: string) => (__VLS_ctx.sinvDoc.party = value))
};
}
// @ts-ignore
[openShiftCloseModal, openShiftCloseModal, toggleModal, openPaymentModal, openPaymentModal, createTransaction, toggleModal, setCashAmount, setTransferAmount, setTransferRefNo, setTransferClearanceDate, t, itemSearchTerm, t, itemSearchTerm, addItem, getItem, itemSearchTerm, itemSearchTerm, sinvDoc, sinvDoc, addItem, sinvDoc, sinvDoc, sinvDoc, sinvDoc, sinvDoc, sinvDoc,];
}
{
let __VLS_81!: 'SelectedItemTable' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.SelectedItemTable : (typeof __VLS_resolvedLocalAndGlobalComponents)['SelectedItemTable'];
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({ ...{}, }));
({} as { SelectedItemTable: typeof __VLS_81; }).SelectedItemTable;
const __VLS_83 = __VLS_82({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_82));
const __VLS_84 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83)!;
}
(__VLS_75.slots!).default;
}
{
const __VLS_85 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_86 = __VLS_asFunctionalComponent(__VLS_85, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_87 = __VLS_86({ ...{ ...{}, class: ("bg-white border p-4 rounded-md"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_86));
const __VLS_88 = __VLS_pickFunctionalComponentCtx(__VLS_85, __VLS_87)!;
{
const __VLS_89 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_91 = __VLS_90({ ...{ ...{}, class: ("w-full grid grid-cols-2 gap-y-2 gap-x-3"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_90));
const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_89, __VLS_91)!;
{
const __VLS_93 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_95 = __VLS_94({ ...{ ...{}, class: (""), }, }, ...__VLS_functionalComponentArgsRest(__VLS_94));
const __VLS_96 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95)!;
{
const __VLS_97 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_99 = __VLS_98({ ...{ ...{}, class: ("grid grid-cols-2 gap-2"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_98));
const __VLS_100 = __VLS_pickFunctionalComponentCtx(__VLS_97, __VLS_99)!;
{
let __VLS_101!: 'FloatingLabelFloatInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FloatingLabelFloatInput : (typeof __VLS_resolvedLocalAndGlobalComponents)['FloatingLabelFloatInput'];
const __VLS_102 = __VLS_asFunctionalComponent(__VLS_101, new __VLS_101({
...{}, df: (({
label: __VLS_ctx.t`Total Quantity`,
fieldtype: 'Int',
fieldname: 'totalQuantity',
minvalue: 0,
maxvalue: 1000,
})), size: ("large"), value: ((__VLS_ctx.totalQuantity)), readOnly: ((true)), textRight: ((true)),
}));
({} as { FloatingLabelFloatInput: typeof __VLS_101; }).FloatingLabelFloatInput;
const __VLS_103 = __VLS_102({
...{
...{}, df: (({
label: __VLS_ctx.t`Total Quantity`,
fieldtype: 'Int',
fieldname: 'totalQuantity',
minvalue: 0,
maxvalue: 1000,
})), size: ("large"), value: ((__VLS_ctx.totalQuantity)), readOnly: ((true)), textRight: ((true)),
},
}, ...__VLS_functionalComponentArgsRest(__VLS_102));
const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_101, __VLS_103)!;
}
{
let __VLS_105!: 'FloatingLabelCurrencyInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FloatingLabelCurrencyInput : (typeof __VLS_resolvedLocalAndGlobalComponents)['FloatingLabelCurrencyInput'];
const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({
...{ onChange: {} as any, }, df: (({
label: __VLS_ctx.t`Add'l Discounts`,
fieldtype: 'Int',
fieldname: 'additionalDiscount',
minvalue: 0,
})), size: ("large"), value: ((__VLS_ctx.additionalDiscounts)), readOnly: ((true)), textRight: ((true)),
}));
({} as { FloatingLabelCurrencyInput: typeof __VLS_105; }).FloatingLabelCurrencyInput;
const __VLS_107 = __VLS_106({
...{
...{ onChange: {} as any, }, df: (({
label: __VLS_ctx.t`Add'l Discounts`,
fieldtype: 'Int',
fieldname: 'additionalDiscount',
minvalue: 0,
})), size: ("large"), value: ((__VLS_ctx.additionalDiscounts)), readOnly: ((true)), textRight: ((true)),
},
}, ...__VLS_functionalComponentArgsRest(__VLS_106));
const __VLS_108 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107)!;
let __VLS_109 = { 'change': __VLS_pickEvent(__VLS_108.emit!, 'change' as const, __VLS_componentProps(__VLS_106, __VLS_107).onChange) };
__VLS_109 = {
change: ((amount: Money) => __VLS_ctx.additionalDiscounts = amount)
};
}
(__VLS_100.slots!).default;
}
{
const __VLS_110 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_112 = __VLS_111({ ...{ ...{}, class: ("mt-4 grid grid-cols-2 gap-2"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112)!;
{
let __VLS_114!: 'FloatingLabelCurrencyInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FloatingLabelCurrencyInput : (typeof __VLS_resolvedLocalAndGlobalComponents)['FloatingLabelCurrencyInput'];
const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({
...{}, df: (({
label: __VLS_ctx.t`Item Discounts`,
fieldtype: 'Currency',
fieldname: 'itemDiscounts',
})), size: ("large"), value: ((__VLS_ctx.itemDiscounts)), readOnly: ((true)), textRight: ((true)),
}));
({} as { FloatingLabelCurrencyInput: typeof __VLS_114; }).FloatingLabelCurrencyInput;
const __VLS_116 = __VLS_115({
...{
...{}, df: (({
label: __VLS_ctx.t`Item Discounts`,
fieldtype: 'Currency',
fieldname: 'itemDiscounts',
})), size: ("large"), value: ((__VLS_ctx.itemDiscounts)), readOnly: ((true)), textRight: ((true)),
},
}, ...__VLS_functionalComponentArgsRest(__VLS_115));
const __VLS_117 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116)!;
}
if (__VLS_ctx.sinvDoc.fieldMap) {
{
let __VLS_118!: 'FloatingLabelCurrencyInput' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.FloatingLabelCurrencyInput : (typeof __VLS_resolvedLocalAndGlobalComponents)['FloatingLabelCurrencyInput'];
const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{}, df: ((__VLS_ctx.sinvDoc.fieldMap.grandTotal)), size: ("large"), value: ((__VLS_ctx.sinvDoc.grandTotal)), readOnly: ((true)), textRight: ((true)), }));
({} as { FloatingLabelCurrencyInput: typeof __VLS_118; }).FloatingLabelCurrencyInput;
const __VLS_120 = __VLS_119({ ...{ ...{}, df: ((__VLS_ctx.sinvDoc.fieldMap.grandTotal)), size: ("large"), value: ((__VLS_ctx.sinvDoc.grandTotal)), readOnly: ((true)), textRight: ((true)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_119));
const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120)!;
}
// @ts-ignore
[t, totalQuantity, t, totalQuantity, t, additionalDiscounts, t, additionalDiscounts, additionalDiscounts, t, itemDiscounts, t, itemDiscounts, sinvDoc, sinvDoc, sinvDoc, sinvDoc, sinvDoc,];
}
(__VLS_113.slots!).default;
}
(__VLS_96.slots!).default;
}
{
const __VLS_122 = ({} as __VLS_IntrinsicElements)["div"];
const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, {});
({} as __VLS_IntrinsicElements).div;
({} as __VLS_IntrinsicElements).div;
const __VLS_124 = __VLS_123({ ...{ ...{}, class: (""), }, }, ...__VLS_functionalComponentArgsRest(__VLS_123));
const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124)!;
{
let __VLS_126!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_127 = __VLS_asFunctionalComponent(__VLS_126, new __VLS_126({ ...{ onClick: {} as any, }, class: ("w-full bg-red-500 py-6"), disabled: ((!__VLS_ctx.sinvDoc.items?.length)), }));
({} as { Button: typeof __VLS_126; }).Button;
({} as { Button: typeof __VLS_126; }).Button;
const __VLS_128 = __VLS_127({ ...{ ...{ onClick: {} as any, }, class: ("w-full bg-red-500 py-6"), disabled: ((!__VLS_ctx.sinvDoc.items?.length)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_127));
const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_126, __VLS_128)!;
let __VLS_130 = { 'click': __VLS_pickEvent(__VLS_129.emit!, 'click' as const, __VLS_componentProps(__VLS_127, __VLS_128).onClick) };
__VLS_130 = {
click: (__VLS_ctx.clearValues)
};
{
let __VLS_131!: 'Slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Slot : 'slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.slot : (typeof __VLS_resolvedLocalAndGlobalComponents)['slot'];
const __VLS_132 = __VLS_asFunctionalComponent(__VLS_131, new __VLS_131({ ...{}, }));
const __VLS_133 = __VLS_132({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_132));
var __VLS_134 = {};
{
const __VLS_135 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_137 = __VLS_136({ ...{ ...{}, class: ("uppercase text-lg text-white font-semibold"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_136));
const __VLS_138 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137)!;
(__VLS_ctx.t`Cancel`);
(__VLS_138.slots!).default;
}
(__VLS_129.slots!).default;
}
(__VLS_129.slots!).default;
}
{
let __VLS_139!: 'Button' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Button : (typeof __VLS_resolvedLocalAndGlobalComponents)['Button'];
const __VLS_140 = __VLS_asFunctionalComponent(__VLS_139, new __VLS_139({ ...{ onClick: {} as any, }, class: ("mt-4 w-full bg-green-500 py-6"), disabled: ((__VLS_ctx.disablePayButton)), }));
({} as { Button: typeof __VLS_139; }).Button;
({} as { Button: typeof __VLS_139; }).Button;
const __VLS_141 = __VLS_140({ ...{ ...{ onClick: {} as any, }, class: ("mt-4 w-full bg-green-500 py-6"), disabled: ((__VLS_ctx.disablePayButton)), }, }, ...__VLS_functionalComponentArgsRest(__VLS_140));
const __VLS_142 = __VLS_pickFunctionalComponentCtx(__VLS_139, __VLS_141)!;
let __VLS_143 = { 'click': __VLS_pickEvent(__VLS_142.emit!, 'click' as const, __VLS_componentProps(__VLS_140, __VLS_141).onClick) };
__VLS_143 = {
click: $event => {
__VLS_ctx.toggleModal('Payment', true);
}
};
{
let __VLS_144!: 'Slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.Slot : 'slot' extends keyof typeof __VLS_ctx ? typeof __VLS_ctx.slot : (typeof __VLS_resolvedLocalAndGlobalComponents)['slot'];
const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({ ...{}, }));
const __VLS_146 = __VLS_145({ ...{ ...{}, }, }, ...__VLS_functionalComponentArgsRest(__VLS_145));
var __VLS_147 = {};
{
const __VLS_148 = ({} as __VLS_IntrinsicElements)["p"];
const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, {});
({} as __VLS_IntrinsicElements).p;
({} as __VLS_IntrinsicElements).p;
const __VLS_150 = __VLS_149({ ...{ ...{}, class: ("uppercase text-lg text-white font-semibold"), }, }, ...__VLS_functionalComponentArgsRest(__VLS_149));
const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150)!;
(__VLS_ctx.t`Pay`);
(__VLS_151.slots!).default;
}
(__VLS_142.slots!).default;
}
(__VLS_142.slots!).default;
}
(__VLS_125.slots!).default;
}
(__VLS_92.slots!).default;
}
(__VLS_88.slots!).default;
}
(__VLS_71.slots!).default;
}
(__VLS_67.slots!).default;
}
(__VLS_44.slots!).default;
}
(__VLS_3.slots!).default;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {
default?(_: typeof __VLS_147): any;
};
// @ts-ignore
[sinvDoc, sinvDoc, clearValues, t, disablePayButton, disablePayButton, toggleModal, t,];
return __VLS_slots;
}
