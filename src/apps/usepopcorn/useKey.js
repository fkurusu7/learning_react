import { useEffect } from "react";

export function useKey(key, action) {
  // KEY Stroke ESC back to watched movies
  useEffect(
    function () {
      function callback(ev) {
        if (ev.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, key]
  );
}
