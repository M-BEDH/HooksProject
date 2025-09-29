
function Profile() {

  const user = {

    name: 'Lisa',
    age: 8
  }

  return (
    <div>
      <h1> Profile </h1>
      <div className='user'>
        <p>Name : {user.name} <br />
          Age : {user.age} ans
        </p>
      </div>
    </div>
  )
}

export default Profile
