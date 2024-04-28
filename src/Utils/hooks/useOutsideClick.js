import { useEffect, useState } from "react";

export const useOutsideClick = (ref) => {
	const [open, setOpen] = useState(true);

	useEffect(() => {
		let fn = (e) => {
			if (!ref.current.contains(e.target)) {
				setOpen(false);
			} else setOpen(true);
		};
		let evLs = document.addEventListener("mousedown", fn);
		return () => {
			document.removeEventListener("mousedown", evLs);
		};
	}, []);

	return { open, setOpen: (e) => setOpen(e) };
};
