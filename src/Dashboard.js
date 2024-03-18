export default function Dashboard({ products }) {
  return (
    <section>
      <label>Employee Productivity Dashboard</label>
      <div className="productivity">
        {products &&
          products.map((prod) => {
            return (
              <>
                <div key={prod.id} className="prodlevel">
                  <h4>{prod.prodname}</h4>
                  <div
                    className="progress"
                    role="progressbar"
                    aria-label="Basic example"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      className="progress-bar"
                      style={{
                        width: `${prod.prodlevel}`,
                        backgroundColor: "#36A546",
                      }}
                    ></div>
                  </div>
                </div>

                <span>{prod.prodlevel}</span>
              </>
            );
          })}
      </div>
    </section>
  );
}
