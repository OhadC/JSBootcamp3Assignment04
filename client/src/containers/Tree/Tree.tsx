import * as React from "react"
import { connect } from 'react-redux'

import * as actions from '../../store/actions'
import { IAppState } from '../../store/reducers'
import { ITreeItem } from '../../models'
import { IItemHTMLElement } from './components/chat-tree-module'
import TreeSearch from './components/treeSearch'
import ChatTree from './components/ChatTree'
import { treeSelector } from "../../store/selectors"
import './Tree.css'

interface IProps {
    tree: ITreeItem[]
    activeId: string | null
    forcedActiveId: string | null
    expandedIds: string[]
    changeActive: any
    changeExpandedIds: any
    changeTreeFilter: any
}

export class Tree extends React.PureComponent<IProps, {}> {
    activeElementChangedHandler = (activeElement: IItemHTMLElement) => this.props.changeActive(activeElement.item.group)
    expandedIdsChangedHandler = (id: string, expandedIds: string[]) => this.props.changeExpandedIds(expandedIds)

    render() {
        const chatTreeProps = {
            activeElementChanged: this.activeElementChangedHandler,
            activeId: this.props.activeId,
            forcedActiveId: this.props.forcedActiveId,
            expandedIds: this.props.expandedIds,
            expandedIdsChanged: this.expandedIdsChangedHandler,
            filteredTree: this.props.tree,
        }

        return (
            <section style={TreeStyle}>
                <TreeSearch filterData={this.props.changeTreeFilter} />
                <ChatTree {...chatTreeProps} />
            </section>
        )
    }
}

const TreeStyle: React.CSSProperties = {
    background: '#252839',
    color: 'white',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
}

const mapStateToProps = (state: IAppState) => ({
    tree: treeSelector(state),
    activeId: state.tree.active && state.tree.active._id,
    forcedActiveId: state.tree.forcedActive && state.tree.forcedActive._id,
    expandedIds: state.tree.expandedIds,
})

const mapDispatchToProps = {
    changeActive: actions.setActive,
    changeExpandedIds: actions.setExpandedIds,
    changeTreeFilter: actions.setTreeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Tree)
