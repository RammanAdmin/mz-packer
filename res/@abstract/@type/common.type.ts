import {MzPackInterface} from "../@interface/mz-pack.interface";
import {MzItemTypeEnum} from "../@enum/common.enum";

export type MzStorageOfPacksType = {
    [s: string]: {
        // will be reference to pack objects
        class: MzPackInterface,
        // will be pack ids array
        bindingPacks: string[] 
    }
}

export type MzSubscriptionsOfPackerType = {
    onAddItem: any[],
    onWriteItem: any[],
    onChangeItem: any[],
    onRemoveItem: any[],

    onChangeState: any[],
}

export type MzState = {
    current: string | null,
    previous: string | null
}

export type MzInputOnChangeState = {
    packId?: string,
    state: MzState,
    storage: any
}

export type MzInputOnChangeItem = {
    packId?: string,
    state: MzState,
    storage: any,
    item: any,
    id: any,
    type: MzItemTypeEnum
}

export type MzInputOnEmitType = {
    packId: string,
    state: MzState,
    storage: any,
    data: any
}



export type MzInputOnAddItem = {
    packId?: string,
    state: MzState,
    storage: any,
    item: any,
    type: MzItemTypeEnum
}



export type MzInputOnChangeStorage = {
    storage: any
}

export type MzInputWrite = {
    id: string,
    item: any,
    typeChange: MzItemTypeEnum
}

export type MzInputAction = {
    id: string,
    item?: any
}