import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative z-10 py-24 md:py-36 bg-black">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
            Запросить доступ
          </p>
          <h2 className="text-4xl md:text-5xl font-sentient">
            Начните работу <br />
            <i className="font-light">уже сегодня</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-6 max-w-md mx-auto">
            Оставьте заявку — мы свяжемся с вами и настроим приложение под вашу управляющую компанию
          </p>
        </div>

        {submitted ? (
          <div className="border border-border p-12 text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary">
              <Icon name="Check" size={22} />
            </div>
            <p className="font-mono text-lg text-foreground">Заявка отправлена!</p>
            <p className="font-mono text-sm text-foreground/50">
              Мы свяжемся с вами в течение рабочего дня
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="border border-border divide-y divide-border">
            {[
              { key: "name", label: "Ваше имя", placeholder: "Иван Иванов", type: "text" },
              { key: "company", label: "Название УК", placeholder: "ООО «УК Комфорт»", type: "text" },
              { key: "phone", label: "Телефон", placeholder: "+7 (999) 000-00-00", type: "tel" },
            ].map(({ key, label, placeholder, type }) => (
              <div key={key} className="flex flex-col sm:flex-row">
                <label className="font-mono text-xs uppercase tracking-widest text-foreground/40 p-5 sm:w-40 shrink-0 flex items-center">
                  {label}
                </label>
                <input
                  required
                  type={type}
                  placeholder={placeholder}
                  value={form[key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-foreground/20 p-5 outline-none focus:bg-white/5 transition-colors duration-200 border-t sm:border-t-0 sm:border-l border-border"
                />
              </div>
            ))}
            <div className="flex flex-col sm:flex-row">
              <label className="font-mono text-xs uppercase tracking-widest text-foreground/40 p-5 sm:w-40 shrink-0 flex items-start pt-5">
                Комментарий
              </label>
              <textarea
                rows={3}
                placeholder="Сколько сотрудников, какие задачи..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="flex-1 bg-transparent font-mono text-sm text-foreground placeholder:text-foreground/20 p-5 outline-none focus:bg-white/5 transition-colors duration-200 resize-none border-t sm:border-t-0 sm:border-l border-border"
              />
            </div>
            <div className="p-5 flex justify-end">
              <Button type="submit">
                [Отправить заявку]
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
