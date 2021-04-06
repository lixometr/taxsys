import Inputmask from "inputmask";

export default function useMask(el: HTMLInputElement, mask: string) {
    const inp = Inputmask({ mask })
    inp.mask(el)
    el.addEventListener('paste', e => {
        inp.setValue((e.target as any).value)
    })
    return inp
}