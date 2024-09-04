

// eslint-disable-next-line react/prop-types
const Msgbox = ({username,textcolor}) => {
    let color = {color:textcolor}
  return (
    <>
        <h1 style={color}>Hello, {username}</h1>
    </>
  )
}

export default Msgbox
