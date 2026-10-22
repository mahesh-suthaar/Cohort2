# Day 74 Notes: Two-Way Binding in React
 
## What is Two-Way Binding?
 
Two-way binding means:
 
- The UI (input field) updates the state
- The state updates the UI
In simple terms, data flows in both directions:
 
- User types → state changes
- State changes → UI updates automatically
React follows **one-way (unidirectional) data flow**, but we can manually implement two-way binding using:
 
- `useState`
- `value` attribute
- `onChange` event <br>
This manual approach is called **Controlled Components**.
 
---
 
## Example Code
 
```jsx
import { useState } from 'react'
 
const App = () => {
 
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
 
  const [allUsers, setAllUsers] = useState([])
 
  const submitHandler = (e) => {
    e.preventDefault()
 
    setAllUsers([...allUsers, { title, email }])
 
    setTitle('')
    setEmail('')
 
  }
 
  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter name'
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
 
        <input
          type="text"
          placeholder='Enter email'
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
 
        <button>Submit</button>
      </form>
 
      {allUsers.map(function (elem, idx) {
        return <div key={idx}>
          <h4>{elem.title}</h4>
          <p>{elem.email}</p>
        </div>
      })}
    </div>
 
  )
}
 
export default App
```
 
---
 
## Step-by-Step Explanation
 
### 1. Importing `useState`
 
```jsx
import { useState } from 'react'
```
 
- `useState` is a React Hook
- It allows this component to store and update data
- Whenever state changes, the component re-renders
### 2. Component Definition
 
```jsx
const App = () => {
```
 
- `App` is a functional component
- Everything inside it runs again when state changes
### 3. State Variables (Core of Two-Way Binding)
 
```jsx
const [title, setTitle] = useState('')
const [email, setEmail] = useState('')
```
 
- `title` → stores the name input value
- `email` → stores the email input value
- Initial value is an empty string (`''`)
- These states are bound to the input fields
This is where two-way binding starts.
 
#### Users List State
 
```jsx
const [allUsers, setAllUsers] = useState([])
```
 
- Stores all submitted users
- Initial value is an empty array
- Each user will be an object: `{ title, email }`
### 4. Form Submit Handler
 
```jsx
const submitHandler = (e) => {
  e.preventDefault()
```
 
- `e.preventDefault()` stops the page refresh
- React handles the form submission internally
#### Adding User Data
 
```jsx
setAllUsers([...allUsers, { title, email }])
```
 
- Creates a new array
- Copies old users using the spread operator `...allUsers`
- Adds a new user object
- State update triggers a re-render
> **React rule:** never mutate state directly.
 
#### Clearing Inputs After Submit
 
```jsx
setTitle('')
setEmail('')
```
 
- Resets the input fields
- Because the inputs are controlled, the UI also clears
- This shows **state → UI** binding
### 5. Form JSX
 
```jsx
<form onSubmit={(e) => {
  submitHandler(e)
}}>
```
 
- When the form is submitted, `submitHandler` runs
- Submit works via the button or the Enter key
### 6. First Input (Name)
 
```jsx
<input
  type="text"
  placeholder='Enter name'
  value={title}
  required
  onChange={(e) => {
    setTitle(e.target.value)
  }}
/>
```
 
**What is happening here?**
 
- `value={title}`: the input value comes from state (**state → UI**)
- `onChange`: every keystroke updates state (**UI → state**)
This is two-way binding using controlled components.
 
### 7. Second Input (Email)
 
```jsx
<input
  type="text"
  placeholder='Enter email'
  value={email}
  required
  onChange={(e) => {
    setEmail(e.target.value)
  }}
/>
```
 
- Works exactly like the first input
- Separate state for clean control
- Keeps the email input synchronized with state
### 8. Submit Button
 
```jsx
<button>Submit</button>
```
 
- Triggers form submission
- Calls `onSubmit` of the form
### 9. Rendering Submitted Users
 
```jsx
{allUsers.map(function (elem, idx) {
  return <div key={idx}>
    <h4>{elem.title}</h4>
    <p>{elem.email}</p>
  </div>
})}
```
 
**Explanation:**
 
- `map()` loops over `allUsers`
- `elem` = a single user object
- `idx` = index (used as `key` here)
- Displays each user's:
  - name (`elem.title`)
  - email (`elem.email`)
Every time `allUsers` updates → the UI updates automatically.