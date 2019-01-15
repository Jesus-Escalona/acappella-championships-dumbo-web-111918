let groups = []

class Group {
  constructor({id, name, membership, college}) {
    this.id = id
    this.name = name
    this.membership = membership
    this.college = college
    groups.push(this)
  }

  render(node) {
    let tRow = document.createElement("tr")
    tRow.dataset.id = this.id
    tRow.innerHTML = `<td>${this.college.name}</td>
    <td class='padding center'>${this.name}</td>
    <td class='padding center'>${this.membership}</td>
    <td class='padding center'>${this.college.division}</td>
    <td class='padding center'><img class="btn" src='./assets/trophy.png' data-id='${this.id}'/></td>
    <td class='padding center'><button class="remove" data-id='${this.id}'>Remove</button></td>`
    node.append(tRow)
  }

}