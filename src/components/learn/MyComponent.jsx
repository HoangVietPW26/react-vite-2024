import './styles.css'

const MyComponent = () => {

    const viet = "viet"
    const viet2 = {
      name: "viet",
      age: 24
    }
    const viet3 = [1,2,3]

    return (
      <>
      <div className=""> {JSON.stringify(viet2)} & Nguyen Hoang Viet Update </div>
      <div>{console.log("MAGIC")}</div>
      <div className="child" style={{borderRadius: "10px"}}> child </div>
      </>
    )
  }

export default MyComponent
