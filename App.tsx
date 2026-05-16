function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Leads Dashboard</h1>

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Source</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul</td>
            <td>rahul@example.com</td>
            <td>Qualified</td>
            <td>Instagram</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;