<script lang="ts">
  // Импортируем компоненты через красивый алиас $lib
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import * as Card from "$lib/components/ui/card";
</script>

<div class="flex h-screen w-full items-center justify-center bg-slate-50">
  
  <!-- Компонент Карточки -->
  <Card.Root class="w-[350px] shadow-lg">
    <Card.Header>
      <Card.Title>Вход в систему</Card.Title>
      <Card.Description>Введите данные для доступа к проекту.</Card.Description>
    </Card.Header>
    
    <Card.Content>
      <form>
        <div class="grid w-full items-center gap-4">
          
          <!-- Группа: Label + Input -->
          <div class="flex flex-col space-y-1.5">
            <Label for="email">Email</Label>
            <Input id="email" placeholder="name@example.com" />
          </div>
          
          <div class="flex flex-col space-y-1.5">
            <Label for="password">Пароль</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>

        </div>
      </form>
    </Card.Content>
    
    <Card.Footer class="flex justify-between">
      <Button variant="outline">Отмена</Button>
      <Button>Войти</Button>
    </Card.Footer>
  </Card.Root>

</div>