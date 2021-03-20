import Inputmask from "inputmask";

export default function useMask(el: HTMLElement, mask: string) {
    const inp = Inputmask({ mask })
    inp.mask(el)
    return inp
}