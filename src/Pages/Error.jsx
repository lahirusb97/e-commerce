import React from "react";
import { useRouteError } from "react-router-dom";
export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1 className="text-cmain font-black text-5xl text-center m-10">Error</h1>
      <p>{error}</p>
    </div>
  );
}
