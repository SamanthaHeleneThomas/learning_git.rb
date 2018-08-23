# Shopping App



 #Create Inventory (name, price)

@inventory_list [
    {item:"shirt", color:"red",price:10},
    {item:"shoes", color: "black", price:20},
    {itme: "pants", color:"brown", price: 15},
    ]


 # Create A Menu

@menu_options = [
    "shop",
    "search specific items",
    "add to cart",
    'remove from cart',
    "exit"
]

def menu_options(number)
    case number
        when 1
            puts "shop"
        when 2
            puts "search specific item"
        when 3
            puts "add to cart"
        when 4
            puts "remove from cart"
        else
            puts "exit"
    end
end 

def greeting 
    puts "Welcome"
    puts "what would you like to do today?"
    print_menu
end 

 

#calling
greeting


# class App
#     def initialize 
#     end 

# end

class User
    def initialize (name)
        @name = name 
    end 

end 

class Items
    def initialize (item, color, price)
        @item= item
        @color= color
        @price = price
    end
     
    def shop
        puts "Available items"
    end 
    
    def search_specific_items
        puts "Search"
    end


    item_1 = Item.new("shirt", "red", 10)
    item_2 = Item.new("shoes", "black", 20)
    item_3 = Item.new("pants", "brown", 15)
   
end 

class Cart
    def initialize (items_available)
        @items_available = items_available
    end

    def Available
        puts "#{item} is available in #{color} for #{price}"
    end 

    def add_to_cart
        puts "Add to cart"
    end 
    
    def remove_from_cart
        puts "Remove from Cart"
    end 
end 




#Extra Credit


    # Create a cart

    # Ask for users name and money
    # set a limit on acceptable money

    #create new user (from name and money)

    #Create a menu for peoples items

    #create a limit on menu

    #Don't let users take buy items out of stock

    #create multiple stores
