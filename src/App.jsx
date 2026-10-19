import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')

  const handleAddItem = (e) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    if (!trimmed) return

    setItems((prevItems) => [...prevItems, trimmed])
    setInputValue('')
  }

  const handleRemoveItem = (indexToRemove) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove))
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Add Items to List</h1>
        <form onSubmit={handleAddItem} className={styles.inputGroup}>
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.addButton}>
            Add
          </button>
        </form>

        {items.length === 0 ? (
          <p className={styles.emptyMessage}>No items yet. Add your first one!</p>
        ) : (
          <ul className={styles.itemList}>
            {items.map((item, index) => (
              <li key={index} className={styles.item}>
                <span className={styles.itemText}>{item}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default App

