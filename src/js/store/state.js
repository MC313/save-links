import { colorTheme } from "../styles/styles";

export default {
  currentStep: 1,
  isSubmitting: false,
  scrollValue: 0,
  showOverlay: false,
  formData: {
    title: "",
    url: "",
    tags: "",
    phone: "",
    timeValue: "",
    timeUnit: "",
  },
  theme: colorTheme.light,
};
