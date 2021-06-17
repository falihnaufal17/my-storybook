import './App.css';
import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'
import Input from './components/Input'
import TextArea from './components/TextArea'

function App() {
  return (
    <>
      <Header>My App</Header>
      <div className="container">
        <Card title="Form">
          <Input type="text" label="First Name" className="form-control" placeholder="First Name" />
          <Input type="text" label="Last Name" className="form-control form-control-secondary" inline placeholder="Last Name" />
          <TextArea label="Address" className="form-control" placeholder="Your Address" />
          <Button className="primary">Submit</Button>
        </Card>
      </div>
    </>
  );
}

export default App;
