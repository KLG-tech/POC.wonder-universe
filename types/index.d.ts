import { LargeNumberLike } from "crypto";

declare global {
  // START: COMPONENT INTERFACE
  interface IDialog {
    type: "alert" | "confirm" | "prompt";
    active: boolean;
    message: string;
    title: string;
    okText: string;
    okColor:
      | "primary"
      | "secondary"
      | "warning"
      | "error"
      | "success"
      | "light"
      | "dark";
    cancelText: string;
    cancelColor:
      | "primary"
      | "secondary"
      | "warning"
      | "error"
      | "success"
      | "light"
      | "dark";
    inputType: "text" | "password";
    resolve: (data: string | boolean) => void;
  }
  type ToastType = "success" | "info" | "error" | "warning";
  interface Toast {
    id: string;
    message?: string;
    html?: string;
    lifetime?: number;
    type: ToastType;
    jsonMessage?: object | null;
    title?: string | null;
  }
  interface ToastDeafult {
    message: string;
    lifetime?: number;
    title?: string;
  }
  interface ToastSuccess extends ToastDeafult {}
  interface ToastError extends ToastDeafult {}
  interface ToastWarning extends ToastDeafult {}
  interface ToastInfo extends ToastDeafult {}

  // END: COMPONENT INTERFACE
  // START: API
  interface IApiResponse<T = undefined> {
    data: T;
    is_ok: boolean;
    message: string;
    code: null | string;
  }

  interface IRupaRupaSuggestionResponse {
    sug: [
      {
        query: string;
      }
    ];
  }
  interface IRupaRupaPopularResponse {
    popularAlgolia: [
      {
        keyword: string;
      }
    ];
  }

  interface IRupaRupaSearchSug {
    data: string[]
  }
}
