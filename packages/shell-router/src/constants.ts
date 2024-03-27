const shellEvent = {
  RemoteNavigated: (type: string) => `[${type}] navigated`,
  AppShellNavigated: "[app-shell] navigated",
};

export { shellEvent };
