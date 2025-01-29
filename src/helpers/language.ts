import { useRouter } from "next/router";

const router = useRouter();
export const lang = router.locale || 'en';