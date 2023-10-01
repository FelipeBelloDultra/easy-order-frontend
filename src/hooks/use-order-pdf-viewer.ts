import { useContext } from "react";

import { OrderPdfViewerContext } from "~/contexts/order-pdf-viewer-context";

export function useOrderPdfViewer() {
  const context = useContext(OrderPdfViewerContext);

  if (!context) {
    throw new Error(
      "useOrderPdfViewer must be used within an OrderPdfViewerProvider"
    );
  }

  return context;
}
