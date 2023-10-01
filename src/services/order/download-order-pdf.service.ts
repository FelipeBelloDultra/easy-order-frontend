import { Http } from "~/infra/http-client";

type RequestOutput = Blob | MediaSource;

export async function downloadOrderPdf(orderId: string): Promise<void> {
  const response = await Http.get<RequestOutput>(`/orders/${orderId}/pdf`, {
    responseType: "blob",
  });

  const href = URL.createObjectURL(response);

  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("download", "order.pdf");
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(href);
}
