export const GA_TRACKING_ID = process.env.GOOGLE_ANALYTICE_ID

export const pageview = (url: URL) => {
  // @ts-ignore
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  // @ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value
  })
}
