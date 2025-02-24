import Tabs from "../Tabs";
import "./Atroop.css";
export default function ATroop() {
  return (
    <section className="troop-container atroop-container">
      <h1>סוללה א</h1>
      <Tabs>
        <div className="section-1" title="שמירות">
          <div className="div1">1</div>
          <div className="div1">2</div>
          <div className="div1">3</div>
        </div>
        <div className="section-2" title="עמדות">
          <h1>this is section 2</h1>
        </div>
        <div className="section-3" title="section3">
          <h1>this is section 3</h1>
        </div>
      </Tabs>
    </section>
  );
}
