export async function commandExecutor(
  command: string,
  dispatch: any,
  openFolder: () => Promise<void>,
) {
  switch (command) {
    case "OPEN_FOLDER":
      await openFolder();
      break;

    case "TOGGLE_EXPLORER":
      dispatch(toggleExplorer());
      break;

    case "SAVE_FILE":
      console.log("Save File");
      break;

    case "TOGGLE_TERMINAL":
      console.log("Terminal");
      break;

    default:
      break;
  }
}
