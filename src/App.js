import React from 'react'
import Context from './context.js'
import AddDoItem from './AddDoItem.js'
import DoItem from './DoItem.js'
import Menu from './Menu.js'
function App() {
	let local = localStorage["do"] === undefined ? [] : JSON.parse(localStorage["do"])
	let renderIndex = localStorage["renderIndex"] === undefined ? 1 : Number(localStorage["renderIndex"])
	const [arrDoItem, setArrDoItem] = React.useState(local)
	function renderList(index) {
		console.log(renderIndex)
		if (index === 1) setArrDoItem(local)
		if (index === 2) setArrDoItem(local.filter((doItem) => doItem.check === true))
		if (index === 3) setArrDoItem(local.filter((doItem) => doItem.check === false))
		localStorage.setItem('renderIndex', index.toString());
	}
	function saveDo(local) {
		localStorage.setItem('do', JSON.stringify(local));
	}
	function changeCheckbox(id) {
		local = local.map(doItem => {
			if (doItem.id === id) doItem.check = !doItem.check
			return doItem
		})
		saveDo(local)
		renderList(renderIndex)
	}
	function removeItem(id) {
		local = local.filter(doItem => doItem.id !== id)
		saveDo(local)
		renderList(renderIndex)
	}
	function addDoItem(value) {
		local = local.concat([
			{
				id: Date.now(),
				text: value,
				check: false
			}]
		)
		saveDo(local)
		renderList(renderIndex)
	}

	return (
		<Context.Provider value={{ changeCheckbox, removeItem, addDoItem, renderList }}>
			<div className="main">
				<div>
					<div className="DoList_h1_menu" >
						<h1 className="h1">Задачи</h1>
						<Menu />
					</div>
					<AddDoItem />
					{
						arrDoItem.map(doItem => {
							return <DoItem doItem={doItem} key={doItem.id} />
						})
					}
				</div>
			</div>
		</Context.Provider>
	)
}

export default App


