# Unfactored code
def update_quality(self):
    for i in range(len(self.items)):
        if self.items[i].name != "Aged Brie" and self.items[i].name != "Backstage passes to a TAFKAL80ETC concert":
            if self.items[i].quality > 0:
                if self.items[i].name != "Sulfuras, Hand of Ragnaros":
                    self.items[i].quality = self.items[i].quality - 1
        else:
            if self.items[i].quality < 50:
                self.items[i].quality = self.items[i].quality + 1

                if self.items[i].name == "Backstage passes to a TAFKAL80ETC concert":
                    if self.items[i].sell_in < 11:
                        if self.items[i].quality < 50:
                            self.items[i].quality = self.items[i].quality + 1

                    if self.items[i].sell_in < 6:
                        if self.items[i].quality < 50:
                            self.items[i].quality = self.items[i].quality + 1

        if self.items[i].name != "Sulfuras, Hand of Ragnaros":
            self.items[i].sell_in = self.items[i].sell_in - 1

        if self.items[i].sell_in < 0:
            if self.items[i].name != "Aged Brie":
                if self.items[i].name != "Backstage passes to a TAFKAL80ETC concert":
                    if self.items[i].quality > 0:
                        if self.items[i].name != "Sulfuras, Hand of Ragnaros":
                            self.items[i].quality = self.items[i].quality - 1
                else:
                    self.items[i].quality = self.items[i].quality - self.items[i].quality
            else:
                if self.items[i].quality < 50:
                    self.items[i].quality = self.items[i].quality + 1                

# Refactored Code
class GildedRose:
    MAX_QUALITY = 50
    MIN_QUALITY = 0
    AGED_BRIE = "Aged Brie"
    BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert"
    SULFURAS = "Sulfuras, Hand of Ragnaros"
    
    def update_quality(self):
    for i in range(len(self.items)):
        if self.items[i].name != GildedRose.AGED_BRIE and self.items[i].name != GildedRose.BACKSTAGE_PASSES:
            self.decrement_quality_for_normal_items(i)
        else:
            self.increment_quality(i)
                if self.items[i].name == GildedRose.BACKSTAGE_PASSES:
                    if self.items[i].sell_in < 11:
                        self.increment_quality(i)

                    if self.items[i].sell_in < 6:
                        self.increment_quality(i)

        if self.items[i].name != GildedRose.SULFURAS:
            self.items[i].sell_in = self.items[i].sell_in - 1

        if self.items[i].sell_in < 0:
            if self.items[i].name != GildedRose.AGED_BRIE:
                if self.items[i].name != GildedRose.BACKSTAGE_PASSES:
                    self.decrement_quality_for_normal_items(i)
                else:
                    self.items[i].quality = self.items[i].quality - self.items[i].quality
            else:
                self.increment_quality(i)

def decrement_quality_for_normal_items(self, i):
    if self.items[i].quality > 0:
        if self.items[i].name != GildedRose.SULFURAS:
            self.items[i].quality = self.items[i].quality - 1

def increment_quality(self, i):
    if self.items[i].quality < self.MAX_QUALITY:
        self.items[i].quality = self.items[i].quality + 1
