import axiosSecure from '.'

// Save user data in database
export const saveUser = async user => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
  }
  console.log(user)
 const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)

 return data
}
