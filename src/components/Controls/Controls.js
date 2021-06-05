import './Controls.css'

export default function Control(props) {
  return (
    <div className="controls">
      <button className="control-button" onClick={(e) => { }}>Left</button>
      <button className="control-button" onClick={(e) => { }}>Right</button>
      <button className="control-button" onClick={(e) => { }}>Rotate</button>
      <button className="control-button" onClick={(e) => { }}>Down</button>
    </div>
  )
}
