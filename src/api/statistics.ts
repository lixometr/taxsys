import useApi, { UseApiOptions } from "@/compositions/useApi";
import { GetStatisticsDto } from "@/dto/statistics.dto";
import { StatisticsEntity } from "@/models/statistics.entity";
import { classToPlain } from "class-transformer";

export const useApiGetStatistics = (opts?: UseApiOptions) => useApi<GetStatisticsDto, StatisticsEntity>(
    (data: GetStatisticsDto) => ({
        method: 'GET',
        url: '/stats',
        params: classToPlain(data)
    }), { ...opts })