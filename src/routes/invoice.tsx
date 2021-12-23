import { useParams } from "react-router-dom";

export default function Invoice() {
    let params = useParams();
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>
          Invoice number: {params.invoiceId}
        </h2>
      </main>
    );
  }