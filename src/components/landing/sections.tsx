import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white/50 tracking-widest uppercase text-xs">1941 — 1943</Badge>,
    title: "Орловская область в годы Великой Отечественной войны.",
    showButton: true,
    buttonText: 'Узнать историю',
    image: 'https://cdn.poehali.dev/projects/a9827373-9c0c-44dc-b220-50fae6afaad5/files/3cd0df78-0256-4c67-bf44-47440c89bfa6.jpg'
  },
  {
    id: 'occupation',
    title: 'Оккупация. 1941–1943.',
    content: 'В октябре 1941 года немецкие войска оккупировали большую часть Орловской области. Более двух лет жители края жили под властью оккупантов, теряя близких и отстаивая право на жизнь.',
    image: 'https://cdn.poehali.dev/projects/a9827373-9c0c-44dc-b220-50fae6afaad5/files/909105bb-48f7-40a3-9a58-ef6ea758d156.jpg'
  },
  {
    id: 'resistance',
    title: 'Сопротивление и партизанское движение.',
    content: 'На территории области действовали десятки партизанских отрядов. Они срывали поставки врага, освобождали пленных и сохраняли связь с Большой землёй. Народ не сломили — он боролся.',
    image: 'https://cdn.poehali.dev/projects/a9827373-9c0c-44dc-b220-50fae6afaad5/files/2f4a025e-3c8f-47be-8bb1-6e8d2c80f5c7.jpg'
  },
  {
    id: 'battle',
    title: 'Курская дуга. Орловский выступ.',
    content: 'Летом 1943 года в ходе операции «Кутузов» советские войска разгромили орловскую группировку противника. 5 августа 1943 года Орёл был освобождён — в Москве прогремел первый победный салют войны.',
    image: 'https://cdn.poehali.dev/projects/a9827373-9c0c-44dc-b220-50fae6afaad5/files/3f9fd601-7d5a-4321-bd6e-894a55cdb399.jpg'
  },
  {
    id: 'memory',
    title: 'Память живёт.',
    content: 'Орловская земля — земля героев. Её история учит мужеству, стойкости и любви к Родине. Изучайте, помните, передавайте — это наш долг перед теми, кто отдал жизнь за свободу.',
    showButton: true,
    buttonText: 'Изучить материалы',
    image: 'https://cdn.poehali.dev/projects/a9827373-9c0c-44dc-b220-50fae6afaad5/files/0d4a66f2-454b-4510-ba37-0db6dc47dfbe.jpg'
  },
]