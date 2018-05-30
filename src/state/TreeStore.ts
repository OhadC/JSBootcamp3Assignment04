import { ITreeItem } from "../models/tree-item"

export interface ITreeState {
    activeItem: ITreeItem | null
    treeData: Array<ITreeItem>
}

export const treeInitialState: ITreeState = {
    activeItem: null,
    treeData: []
}
