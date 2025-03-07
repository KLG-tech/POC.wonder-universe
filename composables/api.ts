import type { FetchError } from "ofetch";
import type { NitroFetchRequest } from "nitropack";
import type { UseFetchOptions } from "nuxt/app";
import type { AsyncData, KeysOf } from "nuxt/dist/app/composables/asyncData";

export const useAPI = async <T>(
  request: NitroFetchRequest,
  opts?: UseFetchOptions<
    T extends void ? unknown : T,
    (res: T extends void ? unknown : T) => T extends void ? unknown : T,
    KeysOf<(res: T extends void ? unknown : T) => T extends void ? unknown : T>
  >,
  disableAuth = false
) => {
  // const defaultHeader = await useDefaultHeaders();
  const config = useRuntimeConfig();

  let defaultHeader = {
    Accept: "*/*",
  };
  return useFetch(request, {
    headers: {
      ...defaultHeader,
      ...opts?.headers,
    },
    baseURL: "", // opts?.baseURL ?? "", //opts?.baseURL ?? config.public.apiBaseUrl,
    ...opts,
    onResponseError(context) {
      if (context.response._data) {
        useNuxtApp().$toast.error(
          context.response._data.message ?? "An error occured!"
        );
        return context.response._data;
      }
    },
  }) as AsyncData<T, FetchError | null>;
};
