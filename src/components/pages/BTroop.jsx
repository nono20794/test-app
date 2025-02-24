import Tabs from "../Tabs";

export default function BTroop() {
  return (
    <section className="troop-container">
      <h1>סוללה ב</h1>
      <Tabs>
        <div className="section-1" title="שמירות">
          <h1>this is section 1</h1>
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
