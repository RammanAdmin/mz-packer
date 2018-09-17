import { MzPackInterface } from "../@interface/mz-pack.interface";
import { Subject } from "rxjs";
import { MzState, MzInputOnChangeItem, MzInputOnEmitType } from "../@type/common.type";
import { MzItemTypeEnum } from "../@enum/common.enum";
import { MzPackerInterface } from "../@interface/mz-packer.interface";
export declare abstract class MzPackAbstractClass implements MzPackInterface {
    abstract id: string;
    abstract storage: any;
    state: string | null;
    lastState: string | null;
    allItems: {
        id: string;
        item: any;
    }[];
    private packsForRetranslator;
    private myRetranslators;
    saveMyRetranslators(...packs: MzPackInterface[]): void;
    removeMyRetranslators(...packs: MzPackInterface[]): void;
    retranslateToPacks(...packs: MzPackInterface[]): void;
    addPackForRetranslate(...packs: MzPackInterface[]): void;
    removePackFromRetranslate(...packs: MzPackInterface[]): void;
    clearPackForRetranslate(): void;
    addPacker(...packers: MzPackerInterface[]): void;
    getStateFromPack(newState?: string): MzState;
    readonly onEmit$: Subject<MzInputOnEmitType>;
    canEmit(data: any, packId?: string): Promise<boolean>;
    emit(data: any, packIds?: string[], packId?: string): Promise<void>;
    preEmit(data: any, packId?: string): Promise<void>;
    postEmit(data: any, packId?: string): Promise<void>;
    readonly onAddItem$: Subject<MzInputOnChangeItem>;
    canAddItem(id: string, item: any, packId?: string): Promise<boolean>;
    preAddItem(id: string, item: any, packId?: string): Promise<void>;
    addItem(id: string, item: any, packId?: string, callback?: (state: MzState, id: string, item: any) => void): Promise<void>;
    postAddItem(id: string, item: any, packId?: string): Promise<void>;
    readonly onRemoveItem$: Subject<MzInputOnChangeItem>;
    canRemoveItem(id: string, packId?: string, item?: any): Promise<boolean>;
    preRemoveItem(id: string, packId?: string, item?: any): Promise<void>;
    removeItem(id: string, packId?: string, item?: any): Promise<void>;
    postRemoveItem(id: string, packId?: string, item?: any): Promise<void>;
    readonly onChangeItem$: Subject<MzInputOnChangeItem>;
    canChangeItem(id: string, item: any, packId?: string): Promise<boolean>;
    preChangeItem(id: string, item: any, packId?: string): Promise<void>;
    changeItem(id: string, item: any, packId?: string): Promise<void>;
    postChangeItem(id: string, item: any, packId?: string): Promise<void>;
    readonly onWriteItem$: Subject<MzInputOnChangeItem>;
    canWriteItem(id: string, item: any, typeChage: MzItemTypeEnum, packId?: string): Promise<boolean>;
    preWriteItem(id: string, item: any, typeChage: MzItemTypeEnum, packId?: string): Promise<void>;
    writeItem(id: string, item: any, typeChage: MzItemTypeEnum, packId?: string): Promise<void>;
    postWriteItem(id: string, item: any, typeChage: MzItemTypeEnum, packId?: string): Promise<void>;
    readonly onChangeState$: any;
    canChangeState(state: MzState, packId?: string): Promise<boolean>;
    preChangeState(state: MzState, packId?: string): Promise<void>;
    changeState(state: MzState, packId?: string): Promise<void>;
    postChangeState(state: MzState, packId?: string): Promise<void>;
}
