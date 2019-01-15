document.addEventListener("DOMContentLoaded", e => {
  let winnerNode = document.getElementById("winner")
  let tableBody = document.getElementById("table-body")
  delegate(tableBody, winnerNode)
  fetch("http://localhost:3000/a_cappella_groups")
  .then(res => res.json())
  .then(body => addToClass(tableBody, body))
});

function addToClass(node, data) {
  data.forEach(e => {
    let g = new Group(e)
    g.render(node)
  })
}

function delegate(node, node2) {
  node.addEventListener("click", e=> {
    if (e.target.classList.contains("btn")){
      repopulate(node)
      setWinner(e.target.dataset.id, node2)
      removeFromTable(e.target.dataset.id)
    } else if (e.target.classList.contains("remove")) {
      remove(e.target.dataset.id)
      repopulate(node)
    }
  })
}

function remove(id) {
  let i = groups.indexOf(groups.find(g => g.id === parseInt(id)))
  groups.splice(i,1)
}

function repopulate(node) {
  node.innerHTML = ""
  groups.forEach(group => {
    group.render(node)
  })
}

function removeFromTable(id) {
  let e = document.querySelector(`[data-id="${id}"]`)
  e.innerHTML = ""
}

function setWinner(id, node) {
  node.innerText = `Winner: ${id}`
}