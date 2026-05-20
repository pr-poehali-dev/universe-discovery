import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Radio",
    title: "Диспетчеризация",
    description:
      "Принимайте заявки жильцов, назначайте исполнителей и отслеживайте статус работ в реальном времени. Никаких потерянных звонков.",
    items: ["Приём и распределение заявок", "Статусы и SLA", "Push-уведомления"],
  },
  {
    icon: "ClipboardList",
    title: "Учёт",
    description:
      "Ведите учёт ресурсов, показаний счётчиков и плановых работ. Все данные синхронизируются между сотрудниками автоматически.",
    items: ["Показания счётчиков", "Плановые и аварийные работы", "Журнал событий"],
  },
  {
    icon: "MessageSquare",
    title: "Коммуникация",
    description:
      "Внутренний чат для команды и уведомления для жильцов. Все переписки хранятся в одном месте — ничего не теряется.",
    items: ["Чат между сотрудниками", "Уведомления жильцам", "История обращений"],
  },
];

export function Features() {
  return (
    <section id="features" className="relative z-10 py-24 md:py-36 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Ключевые функции
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Всё необходимое <br />
            <i className="font-light">в одном приложении</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-black p-8 md:p-10 flex flex-col gap-6 group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-primary group-hover:border-primary transition-colors duration-300">
                <Icon name={feature.icon} size={18} />
              </div>

              <div>
                <h3 className="font-mono text-lg uppercase tracking-wide text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="font-mono text-sm text-foreground/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <ul className="mt-auto flex flex-col gap-2">
                {feature.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-mono text-xs text-foreground/40"
                  >
                    <span className="text-primary">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
