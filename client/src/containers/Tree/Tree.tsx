import * as React from 'react'
import { connect } from 'react-redux';

import * as actions from '../../store/actions'
import { IAppState } from '../../store/reducers'
import { ITreeItem } from '../../models'
import { ChatTree, IItemHTMLElement } from './chat-tree'
import TreeSearch from './components/treeSearch'
import './Tree.css'

interface IProps {
    style: object
    filteredTree: ITreeItem[]
    changeActiveGroup: any
    changeTreeFilter: any
}

class Tree extends React.Component<IProps, {}> {
    private treeDivRef: React.RefObject<any>
    private sectionRef: React.RefObject<any>
    // private activeElement: IItemHTMLElement | null

    constructor(props: IProps) {
        super(props)

        this.sectionRef = React.createRef()
        this.treeDivRef = React.createRef()

        // this.activeElement = null
    }

    componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
        const prevFilteredTree = prevProps.filteredTree
        const filteredTree = this.props.filteredTree
        if (filteredTree && (!prevFilteredTree || prevFilteredTree !== filteredTree )) {
            const sectionElement = this.sectionRef.current
            const treeDivElement = this.treeDivRef.current

            const chatTree = ChatTree(treeDivElement)
            chatTree.on('activeElementChanged', this.activeElementChangedHandler)
            sectionElement.removeChild(treeDivElement)
            chatTree.load(filteredTree)
            sectionElement.appendChild(treeDivElement)
        }
    }

    activeElementChangedHandler = (activeElement: IItemHTMLElement) => {
        // this.activeElement = activeElement
        this.props.changeActiveGroup(activeElement.item.group)
    }

    addTreeItem = (newItem: ITreeItem) => {

    }

    render() {
        return (
            <section style={{ ...this.props.style, ...TreeStyle }} ref={this.sectionRef}>
                <TreeSearch style={{ margin: '1rem', background: 'rgba(255,255,255,0.1)', color: 'white' }} filterData={this.props.changeTreeFilter} />
                <ul className="Tree" ref={this.treeDivRef} style={{ flex: '1' }} tabIndex={0} />
            </section>
        )
    }
}

const TreeStyle: React.CSSProperties = {
    background: '#252839',
    color: 'white',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column'
}

const mapStateToProps = (state: IAppState) => ({
    filteredTree: state.tree.filteredTree
})

const mapDispatchToProps = {
    changeActiveGroup: actions.setActiveGroup,
    changeTreeFilter: actions.setTreeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Tree)
