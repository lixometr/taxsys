import Inputmask from "inputmask";

export default function useMask(el: HTMLInputElement, mask: string, maskOptions?: any) {
    const inp = Inputmask({ mask, ...maskOptions })
    inp.mask(el)
    el.addEventListener('paste', e => {
        inp.setValue((e.target as any).value)
    })
    return inp
}