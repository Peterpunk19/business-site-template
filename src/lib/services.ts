import { services } from "@/config/services";

export function getServiceName(serviceId: string) {
  return services.find((service) => service.id === serviceId)?.name ?? serviceId;
}
