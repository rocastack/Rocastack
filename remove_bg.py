from PIL import Image, ImageDraw

def remove_background():
    img = Image.open('public/loquiero.webp').convert("RGBA")
    
    # Flood fill from the 4 corners to replace white background with transparent
    # This keeps the inner white parts of the illustration intact
    ImageDraw.floodfill(img, xy=(0, 0), value=(0, 0, 0, 0), thresh=25)
    ImageDraw.floodfill(img, xy=(img.width - 1, 0), value=(0, 0, 0, 0), thresh=25)
    ImageDraw.floodfill(img, xy=(0, img.height - 1), value=(0, 0, 0, 0), thresh=25)
    ImageDraw.floodfill(img, xy=(img.width - 1, img.height - 1), value=(0, 0, 0, 0), thresh=25)
    
    img.save('public/loquiero_nobg.webp', format='WEBP')
    print("Background removed.")

if __name__ == '__main__':
    remove_background()
