import pygame
import random
# Initialize Pygame
pygame.init()  # Define some colors
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)

# Set up the screen
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Dodge the Obstacles")
# Define a clock to control the frame rate
clock = pygame.time.Clock()
# Load the images for the character and the obstacles
player_image = pygame.image.load(
    "Python_Side_Projects/aigames/player.png").convert_alpha()
obstacle_image = pygame.image.load(
    "Python_Side_Projects/aigames/obtical.png").convert_alpha()


class Player(pygame.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = player_image
        self.rect = self.image.get_rect()
        self.rect.centerx = SCREEN_WIDTH // 2
        self.rect.bottom = SCREEN_HEIGHT - 10
        self.speed = 0

    def update(self):
        # Move the player based on its speed
        self.rect.x += self.speed

        # Keep the player inside the screen
        if self.rect.left < 0:
            self.rect.left = 0
        elif self.rect.right > SCREEN_WIDTH:
            self.rect.right = SCREEN_WIDTH

# Define the class for the obstacles


class Obstacle(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = obstacle_image
        self.rect = self.image.get_rect()
        self.rect.centerx = x
        self.rect.top = y
        self.speed = 1

    def update(self):
        # Move the obstacle down based on its speed
        self.rect.y += self.speed


# Define the main game loop
def game_loop():
    # Game loop variables
    running = True
    score = 0
    font = pygame.font.Font(None, 36)

    # Create groups for the sprites
    all_sprites = pygame.sprite.Group()
    obstacles = pygame.sprite.Group()

    # Create the player sprite and add it to the group
    player = Player()
    all_sprites.add(player)

    # Main game loop
    while running:
        # Handle events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    player.speed = -5
                elif event.key == pygame.K_RIGHT:
                    player.speed = 5
            elif event.type == pygame.KEYUP:
                if event.key == pygame.K_LEFT and player.speed < 0:
                    player.speed = 0
                elif event.key == pygame.K_RIGHT and player.speed > 0:
                    player.speed = 0

        # Spawn new obstacles
        if pygame.time.get_ticks() % 60 == 0:
            x = random.randint(0, SCREEN_WIDTH)
            obstacle = Obstacle(x, 0)
            all_sprites.add(obstacle)
            obstacles.add(obstacle)

        # Update the sprites
        all_sprites.update()

        # Check for collisions between the player and the obstacles
        hits = pygame.sprite.spritecollide(player, obstacles, False)
        if hits:
            running = False

        # Draw the sprites and the score
        screen.fill(WHITE)
        all_sprites.draw(screen)
        score_text = font.render("Score: {}".format(score), True, BLACK)
        screen.blit(score_text, (10, 10))

        # Update the screen
        pygame.display.flip()

        # Control the frame rate
        clock.tick(60)

    # Quit Pygame
    pygame.quit()


# Call the game loop to start the game
game_loop()
