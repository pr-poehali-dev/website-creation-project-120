import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Скандинавский модуль',
    area: '65 м²',
    price: '2 890 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a5cf3672-1f44-4837-bc15-e2086e9575b7/files/18ac0cd8-f3b6-4f32-ab46-8d9de07ebfdd.jpg',
    description: 'Минималистичный дизайн с панорамным остеклением'
  },
  {
    id: 2,
    title: 'Современный лофт',
    area: '85 м²',
    price: '3 450 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a5cf3672-1f44-4837-bc15-e2086e9575b7/files/26d4c27d-3e3b-4569-9e58-69d5f2fdff32.jpg',
    description: 'Открытое пространство с высокими потолками'
  },
  {
    id: 3,
    title: 'Эко-резиденция',
    area: '120 м²',
    price: '5 200 000 ₽',
    image: 'https://cdn.poehali.dev/projects/a5cf3672-1f44-4837-bc15-e2086e9575b7/files/618ad320-3c4c-444a-8c5e-718a928c09bd.jpg',
    description: 'Премиальный модульный дом для семьи'
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Почему модульные дома — будущее строительства',
    date: '15 января 2026',
    excerpt: 'Экономия времени до 70%, полная экологичность и современные технологии...'
  },
  {
    id: 2,
    title: '5 преимуществ модульного строительства',
    date: '10 января 2026',
    excerpt: 'От скорости возведения до энергоэффективности — все о наших домах...'
  }
];

function Index() {
  const [activeView, setActiveView] = useState<'2d' | '3d'>('2d');

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-foreground">МодульДом</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#technology" className="text-foreground hover:text-primary transition-colors">Технология</a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 hidden lg:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </nav>
      </header>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Модульные дома <span className="text-primary">нового</span> поколения
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Постройте дом мечты за 2-3 месяца. Полная готовность к заселению, современные технологии, индивидуальный дизайн.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Выбрать проект
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  Виртуальный тур
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">300+</div>
                  <div className="text-sm text-muted-foreground">Построенных домов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">60</div>
                  <div className="text-sm text-muted-foreground">Дней строительства</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет гарантии</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl opacity-20 blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/a5cf3672-1f44-4837-bc15-e2086e9575b7/files/26d4c27d-3e3b-4569-9e58-69d5f2fdff32.jpg"
                alt="Модульный дом"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">О компании</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Zap" size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Быстро</h3>
                <p className="text-muted-foreground">
                  Строим дома за 2-3 месяца благодаря модульной технологии. Производство в цеху и сборка на участке.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Shield" size={28} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Надёжно</h3>
                <p className="text-muted-foreground">
                  15 лет гарантии на конструкцию. Сертифицированные материалы и проверенные технологии строительства.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Leaf" size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Экологично</h3>
                <p className="text-muted-foreground">
                  Используем натуральные материалы и энергоэффективные решения. Класс энергоэффективности A+.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Каталог модульных домов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выберите готовый проект или создайте индивидуальный</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <span className="font-bold text-primary">{project.area}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-primary">{project.price}</div>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Icon name="ArrowRight" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Галерея проектов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Реализованные проекты с 3D визуализацией</p>
          
          <div className="flex justify-center mb-8">
            <Tabs value={activeView} onValueChange={(v) => setActiveView(v as '2d' | '3d')} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="2d" className="flex items-center gap-2">
                  <Icon name="Image" size={18} />
                  Фото
                </TabsTrigger>
                <TabsTrigger value="3d" className="flex items-center gap-2">
                  <Icon name="Box" size={18} />
                  3D визуализация
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <Tabs value={activeView} className="w-full">
            <TabsContent value="2d" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="relative group overflow-hidden rounded-2xl shadow-xl">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <p className="text-sm opacity-90">{project.area}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="3d" className="mt-0">
              <div className="bg-muted/50 rounded-3xl p-12 text-center">
                <Icon name="Box" size={64} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">3D визуализация</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Интерактивные 3D-модели позволят вам рассмотреть каждую деталь будущего дома со всех сторон
                </p>
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Запустить виртуальный тур
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="technology" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Технология строительства</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Модульное производство</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Проектирование</h4>
                    <p className="text-muted-foreground">Создание индивидуального проекта с учётом всех ваших пожеланий</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-secondary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Производство модулей</h4>
                    <p className="text-muted-foreground">Изготовление в заводских условиях с контролем качества на каждом этапе</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Сборка на участке</h4>
                    <p className="text-muted-foreground">Быстрый монтаж готовых модулей — дом готов за 1-2 недели</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary to-accent rounded-3xl opacity-20 blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/a5cf3672-1f44-4837-bc15-e2086e9575b7/files/18ac0cd8-f3b6-4f32-ab46-8d9de07ebfdd.jpg"
                alt="Технология"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-6">
                <Icon name="Thermometer" size={40} className="text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Утепление</h4>
                <p className="text-sm text-muted-foreground">Минеральная вата 200мм</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-6">
                <Icon name="Wind" size={40} className="text-secondary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Вентиляция</h4>
                <p className="text-sm text-muted-foreground">Рекуперация воздуха</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-6">
                <Icon name="Lightbulb" size={40} className="text-accent mx-auto mb-4" />
                <h4 className="font-bold mb-2">Освещение</h4>
                <p className="text-sm text-muted-foreground">LED-системы</p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg">
              <CardContent className="pt-6">
                <Icon name="Droplet" size={40} className="text-primary mx-auto mb-4" />
                <h4 className="font-bold mb-2">Водоснабжение</h4>
                <p className="text-sm text-muted-foreground">Автономная система</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Блог</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
                <CardContent className="p-6">
                  <div className="text-sm text-primary mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-primary font-semibold">
                    Читать далее
                    <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">Оставьте заявку и получите консультацию специалиста</p>
            
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                      <Input placeholder="Иван Иванов" className="h-12" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Телефон</label>
                      <Input placeholder="+7 (999) 123-45-67" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Сообщение</label>
                    <Textarea placeholder="Расскажите о своих планах..." rows={4} />
                  </div>
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg h-14">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h4 className="font-bold mb-2">Телефон</h4>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-secondary" />
                </div>
                <h4 className="font-bold mb-2">Email</h4>
                <p className="text-muted-foreground">info@moduldom.ru</p>
              </div>
              <div className="text-center">
                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <h4 className="font-bold mb-2">Адрес</h4>
                <p className="text-muted-foreground">Москва, ул. Строителей 15</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="text-xl font-bold">МодульДом</span>
              </div>
              <p className="text-white/70 text-sm">Строим современные модульные дома по всей России</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Компания</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#projects" className="hover:text-white transition-colors">Проекты</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#catalog" className="hover:text-white transition-colors">Каталог</a></li>
                <li><a href="#technology" className="hover:text-white transition-colors">Технологии</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (495) 123-45-67</li>
                <li>info@moduldom.ru</li>
                <li>Москва, ул. Строителей 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            © 2026 МодульДом. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
