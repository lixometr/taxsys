import { computed, ComputedRef, Ref, ref, watch } from '@vue/composition-api'
import useGlobalLoading from './useGlobalLoading'
import usePagination from './usePagination'
import useRouter from './useRouter'
interface UseItemsPageProps {
  api: Function
  useQuery?: boolean
}
export default function useItemsPage(props: UseItemsPageProps) {
  const defaults = {
    useQuery: true,
  }

  const { useQuery, api } = Object.assign({}, props, defaults)
  const router = useRouter()
  let toFetch = ref()
  const {
    onChange: onPageChange,
    setPage,
    page,
    nextPage,
    prevPage,
    setTotalPages,
    totalPages,
  } = usePagination({ nowPage: useQuery ? +router.currentRoute.query.page : 1 })
  const showMore = () => nextPage()
  const gLoading = useGlobalLoading()

  const { exec, result } = api({
    toast: { error: (err) => 'Ошибка при запросе данных' },
  })
  const fetchItems = async () => {
    gLoading.show()

    await exec(toFetch.value)
    setPage(result.value.current_page)
    setTotalPages(result.value.last_page)
    gLoading.hide()
  }
  const _init = async () => {
    await fetchItems()
    setPage(result.value.current_page)
    setTotalPages(result.value.last_page)
    watch(toFetch, () => {
      window.scrollTo(0, 0)
      fetchItems()
    })
    onPageChange(() => {
      if (useQuery) {
        router.push({ query: { page: page.value.toString() } })
      }
    })
  }

  const refreshItems = async () => {
    await fetchItems()
  }

  const items = ref([])
  watch(result, (data: any) => {
    items.value = data.data
  })

  const init = async ({ fetchData }: { fetchData: ComputedRef<any> }) => {
    toFetch = fetchData
    await _init()
  }
  return {
    page,
    nextPage,
    prevPage,
    showMore,
    items,
    totalPages,
    fetchItems,
    refreshItems,
    init,
  }
}
