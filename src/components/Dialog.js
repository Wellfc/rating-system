
function Dialog({open, onClose}) {
  return (
    <>
          <dialog open={open}>
              <img
                  src="https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png"
                  width="180px"
                  alt="react-icon"
              />
              <form method="dialog">
                  <button onClick={onClose}>
                      Close Dialog
                  </button>
              </form>
          </dialog>
    </>
  )
}

export default Dialog;