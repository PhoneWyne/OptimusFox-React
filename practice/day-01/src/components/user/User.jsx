export function User({data}) {
  if (!data) {
    return <p>No user data provided.</p>;
  }
  const { name, role, age}  = data;
  // data is recieved, but destructuring results in undefined
 
  return (
    <div>
      <h1>User Data</h1>      
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Age: {age}</p>
    </div>  
  );
}
