export class Field {
  constructor(fieldSize) {
    this.size = fieldSize;
    this.data = new Array(this.size).fill(new Array(this.size).fill(undefined));
    this.subscribers = {};
  }

  _cellSubscriberId(rowI, cellI) {
    return `row${rowI}cell${cellI}`
  }

  cellContent = (rowI, cellI) => this.data[rowI][cellI]

  setCell(rowI, cellI, newContent) {
    this.data = [
      ...this.data.slice(0, rowI),
      [
        ...this.data[rowI].slice(0, cellI),
        newContent,
        ...this.data[rowI].slice(cellI + 1),
      ],
      ...this.data.slice(rowI + 1),
    ]

    const cellSubscriber = this.subscribers[this._cellSubscriberId(rowI, cellI)]
    if (cellSubscriber) {
      cellSubscriber()
    }
  }

  map = (cb) => this.data.map(cb)

  subscribeCellUpdates(rowI, cellI, onSetCellCallback) {
    this.subscribers[this._cellSubscriberId(rowI, cellI)] = onSetCellCallback
  }

  unsubscribeCellUpdates(rowI, cellI) {
    delete this.subscribers[this._cellSubscriberId(rowI, cellI)]
  }
}
