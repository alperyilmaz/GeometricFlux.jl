var documenterSearchIndex = {"docs":
[{"location":"basics/passgraph/#Graph-passing-1","page":"Graph passing","title":"Graph passing","text":"","category":"section"},{"location":"basics/passgraph/#","page":"Graph passing","title":"Graph passing","text":"Graph is an input data structure for graph neural network. Passing graph and input feature into ","category":"page"},{"location":"basics/passgraph/#Static-graph-1","page":"Graph passing","title":"Static graph","text":"","category":"section"},{"location":"basics/passgraph/#Variable-graph-1","page":"Graph passing","title":"Variable graph","text":"","category":"section"},{"location":"basics/passgraph/#Cached-graph-1","page":"Graph passing","title":"Cached graph","text":"","category":"section"},{"location":"start/#Get-started-1","page":"Get started","title":"Get started","text":"","category":"section"},{"location":"manual/models/#Models-1","page":"Models","title":"Models","text":"","category":"section"},{"location":"manual/models/#Autoencoders-1","page":"Models","title":"Autoencoders","text":"","category":"section"},{"location":"manual/models/#Graph-Autoencoder-1","page":"Models","title":"Graph Autoencoder","text":"","category":"section"},{"location":"manual/models/#","page":"Models","title":"Models","text":"Z = enc(X A) \nhatA = sigma (ZZ^T)","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"where A denotes the adjacency matrix.","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"GAE","category":"page"},{"location":"manual/models/#GeometricFlux.GAE","page":"Models","title":"GeometricFlux.GAE","text":"GAE(enc[, σ])\n\nGraph autoencoder.\n\nArguments\n\nenc: encoder. It can be any graph convolutional layer.\n\nEncoder is specified by user and decoder will be InnerProductDecoder layer.\n\n\n\n\n\n","category":"type"},{"location":"manual/models/#","page":"Models","title":"Models","text":"Reference: Variational Graph Auto-Encoders","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"","category":"page"},{"location":"manual/models/#Variational-Graph-Autoencoder-1","page":"Models","title":"Variational Graph Autoencoder","text":"","category":"section"},{"location":"manual/models/#","page":"Models","title":"Models","text":"H = enc(X A) \nZ_mu Z_logσ = GCN_mu(H A) GCN_sigma(H A) \nhatA = sigma (ZZ^T)","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"where A denotes the adjacency matrix, X denotes node features.","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"VGAE","category":"page"},{"location":"manual/models/#GeometricFlux.VGAE","page":"Models","title":"GeometricFlux.VGAE","text":"VGAE(enc[, σ])\n\nVariational graph autoencoder.\n\nArguments\n\nenc: encoder. It can be any graph convolutional layer.\n\nEncoder is specified by user and decoder will be InnerProductDecoder layer.\n\n\n\n\n\n","category":"type"},{"location":"manual/models/#","page":"Models","title":"Models","text":"Reference: Variational Graph Auto-Encoders","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"","category":"page"},{"location":"manual/models/#Special-Layers-1","page":"Models","title":"Special Layers","text":"","category":"section"},{"location":"manual/models/#Inner-product-Decoder-1","page":"Models","title":"Inner-product Decoder","text":"","category":"section"},{"location":"manual/models/#","page":"Models","title":"Models","text":"hatA = sigma (ZZ^T)","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"where Z denotes the input matrix from encoder.","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"InnerProductDecoder","category":"page"},{"location":"manual/models/#GeometricFlux.InnerProductDecoder","page":"Models","title":"GeometricFlux.InnerProductDecoder","text":"InnerProductDecoder(σ)\n\nInner-product decoder layer.\n\nArguments\n\nσ: activation function.\n\n\n\n\n\n","category":"type"},{"location":"manual/models/#","page":"Models","title":"Models","text":"Reference: Variational Graph Auto-Encoders","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"","category":"page"},{"location":"manual/models/#Variational-Encoder-1","page":"Models","title":"Variational Encoder","text":"","category":"section"},{"location":"manual/models/#","page":"Models","title":"Models","text":"H = enc(X A) \nZ_mu Z_logσ = GCN_mu(H A) GCN_sigma(H A)","category":"page"},{"location":"manual/models/#","page":"Models","title":"Models","text":"VariationalEncoder","category":"page"},{"location":"manual/models/#GeometricFlux.VariationalEncoder","page":"Models","title":"GeometricFlux.VariationalEncoder","text":"VariationalEncoder(nn, h_dim, z_dim)\n\nVariational encoder layer.\n\nArguments\n\nnn: neural network. It can be any graph convolutional layer.\nh_dim: dimension of hidden layer. This should fit the output dimension of nn.\nz_dim: dimension of latent variable layer. This will be parametrized into μ and logσ.\n\nEncoder can be any graph convolutional layer.\n\n\n\n\n\n","category":"type"},{"location":"manual/models/#","page":"Models","title":"Models","text":"Reference: Variational Graph Auto-Encoders","category":"page"},{"location":"abstractions/msgpass/#Message-passing-scheme-1","page":"Message passing scheme","title":"Message passing scheme","text":"","category":"section"},{"location":"manual/pool/#Pooling-layers-1","page":"Pooling Layers","title":"Pooling layers","text":"","category":"section"},{"location":"manual/conv/#Convolution-Layers-1","page":"Convolutional Layers","title":"Convolution Layers","text":"","category":"section"},{"location":"manual/conv/#Graph-Convolutional-Layer-1","page":"Convolutional Layers","title":"Graph Convolutional Layer","text":"","category":"section"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"X = sigma(hatD^-12 hatA hatD^-12 X Theta)","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"where hatA = A + I, A denotes the adjacency matrix, and hatD = hatd_ij = sum_j=0 hata_ij is degree matrix.","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"GCNConv","category":"page"},{"location":"manual/conv/#GeometricFlux.GCNConv","page":"Convolutional Layers","title":"GeometricFlux.GCNConv","text":"GCNConv([graph, ]in=>out)\nGCNConv([graph, ]in=>out, σ)\n\nGraph convolutional layer.\n\nArguments\n\ngraph: should be a adjacency matrix, SimpleGraph, SimpleDiGraph (from LightGraphs)\n\nor SimpleWeightedGraph, SimpleWeightedDiGraph (from SimpleWeightedGraphs). Is optionnal so you can give a FeaturedGraph to the layer instead of only the features.\n\nin: the dimension of input features.\nout: the dimension of output features.\nbias::Bool=true: keyword argument, whether to learn the additive bias.\n\nData should be stored in (# features, # nodes) order. For example, a 1000-node graph each node of which poses 100 features is constructed. The input data would be a 1000×100 array.\n\n\n\n\n\n","category":"type"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"Reference: Semi-supervised Classification with Graph Convolutional Networks","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"","category":"page"},{"location":"manual/conv/#Chebyshev-Spectral-Graph-Convolutional-Layer-1","page":"Convolutional Layers","title":"Chebyshev Spectral Graph Convolutional Layer","text":"","category":"section"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"X = sum^K-1_k=0 Z^(k) Theta^(k)","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"where Z^(k) is the k-th term of Chebyshev polynomials, and can be calculated by the following recursive form:","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"Z^(0) = X \nZ^(1) = hatL X \nZ^(k) = 2 hatL Z^(k-1) - Z^(k-2)","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"and hatL = frac2lambda_max L - I.","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"ChebConv","category":"page"},{"location":"manual/conv/#GeometricFlux.ChebConv","page":"Convolutional Layers","title":"GeometricFlux.ChebConv","text":"ChebConv([graph, ]in=>out, k)\n\nChebyshev spectral graph convolutional layer.\n\nArguments\n\ngraph: should be a adjacency matrix, SimpleGraph, SimpleDiGraph (from LightGraphs) or SimpleWeightedGraph,\n\nSimpleWeightedDiGraph (from SimpleWeightedGraphs). Is optionnal so you can give a FeaturedGraph to the layer instead of only the features.\n\nin: the dimension of input features.\nout: the dimension of output features.\nk: the order of Chebyshev polynomial.\nbias::Bool=true: keyword argument, whether to learn the additive bias.\n\n\n\n\n\n","category":"type"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"Reference: Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"","category":"page"},{"location":"manual/conv/#Graph-Neural-Network-Layer-1","page":"Convolutional Layers","title":"Graph Neural Network Layer","text":"","category":"section"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"textbfx_i = Theta_1 textbfx_i + sum_j in mathcalN(i) Theta_2 textbfx_j","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"GraphConv","category":"page"},{"location":"manual/conv/#GeometricFlux.GraphConv","page":"Convolutional Layers","title":"GeometricFlux.GraphConv","text":"GraphConv([graph, ]in=>out)\nGraphConv([graph, ]in=>out, aggr)\n\nGraph neural network layer.\n\nArguments\n\ngraph: should be a adjacency matrix, SimpleGraph, SimpleDiGraph (from LightGraphs) or SimpleWeightedGraph,\n\nSimpleWeightedDiGraph (from SimpleWeightedGraphs). Is optionnal so you can give a FeaturedGraph to the layer instead of only the features.\n\nin: the dimension of input features.\nout: the dimension of output features.\nbias::Bool=true: keyword argument, whether to learn the additive bias.\naggr::Symbol=:add: an aggregate function applied to the result of message function. :add, :max and :mean are available.\n\n\n\n\n\n","category":"type"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"Reference: Weisfeiler and Leman Go Neural: Higher-order Graph Neural Networks","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"","category":"page"},{"location":"manual/conv/#Graph-Attentional-Layer-1","page":"Convolutional Layers","title":"Graph Attentional Layer","text":"","category":"section"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"textbfx_i = alpha_ii Theta textbfx_i + sum_j in mathcalN(i) alpha_ij Theta textbfx_j","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"where the attention coefficient alpha_ij can be calculated from","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"alpha_ij = fracexp(LeakyReLU(textbfa^T Theta textbfx_i  Theta textbfx_j))sum_k in mathcalN(i) cup i exp(LeakyReLU(textbfa^T Theta textbfx_i  Theta textbfx_k))","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"GATConv","category":"page"},{"location":"manual/conv/#GeometricFlux.GATConv","page":"Convolutional Layers","title":"GeometricFlux.GATConv","text":"GATConv([graph, ]in=>out)\n\nGraph attentional layer.\n\nArguments\n\ngraph: should be a adjacency matrix, SimpleGraph, SimpleDiGraph (from LightGraphs) or SimpleWeightedGraph,\n\nSimpleWeightedDiGraph (from SimpleWeightedGraphs). Is optionnal so you can give a FeaturedGraph to the layer instead of only the features.\n\nin: the dimension of input features.\nout: the dimension of output features.\nbias::Bool=true: keyword argument, whether to learn the additive bias.\nnegative_slope::Real=0.2: keyword argument, the parameter of LeakyReLU.\n\n\n\n\n\n","category":"type"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"Reference: Graph Attention Networks","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"","category":"page"},{"location":"manual/conv/#Gated-Graph-Convolution-Layer-1","page":"Convolutional Layers","title":"Gated Graph Convolution Layer","text":"","category":"section"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"textbfh^(0)_i = textbfx_i  textbf0 \ntextbfh^(l)_i = GRU(textbfh^(l-1)_i sum_j in mathcalN(i) Theta textbfh^(l-1)_j)","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"where textbfh^(l)_i denotes the l-th hidden variables passing through GRU. The dimension of input textbfx_i needs to be less or equal to out.","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"GatedGraphConv","category":"page"},{"location":"manual/conv/#GeometricFlux.GatedGraphConv","page":"Convolutional Layers","title":"GeometricFlux.GatedGraphConv","text":"GatedGraphConv([graph, ]out, num_layers)\n\nGated graph convolution layer.\n\nArguments\n\ngraph: should be a adjacency matrix, SimpleGraph, SimpleDiGraph (from LightGraphs) or SimpleWeightedGraph,\n\nSimpleWeightedDiGraph (from SimpleWeightedGraphs). Is optionnal so you can give a FeaturedGraph to the layer instead of only the features.\n\nout: the dimension of output features.\nnum_layers specifies the number of gated recurrent unit.\naggr::Symbol=:add: an aggregate function applied to the result of message function. :add, :max and :mean are available.\n\n\n\n\n\n","category":"type"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"Reference: Gated Graph Sequence Neural Networks","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"","category":"page"},{"location":"manual/conv/#Edge-Convolutional-Layer-1","page":"Convolutional Layers","title":"Edge Convolutional Layer","text":"","category":"section"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"textbfx_i = sum_j in mathcalN(i) f_Theta(textbfx_i  textbfx_j - textbfx_i)","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"where f_Theta denotes a neural network parametrized by Theta, i.e., a MLP.","category":"page"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"EdgeConv","category":"page"},{"location":"manual/conv/#GeometricFlux.EdgeConv","page":"Convolutional Layers","title":"GeometricFlux.EdgeConv","text":"EdgeConv(graph, nn)\nEdgeConv(graph, nn, aggr)\n\nEdge convolutional layer.\n\nArguments\n\ngraph: should be a adjacency matrix, SimpleGraph, SimpleDiGraph (from LightGraphs) or SimpleWeightedGraph, SimpleWeightedDiGraph (from SimpleWeightedGraphs).\nnn: a neural network\naggr::Symbol=:max: an aggregate function applied to the result of message function. :add, :max and :mean are available.\n\n\n\n\n\n","category":"type"},{"location":"manual/conv/#","page":"Convolutional Layers","title":"Convolutional Layers","text":"Reference: Dynamic Graph CNN for Learning on Point Clouds","category":"page"},{"location":"manual/linalg/#Linear-Algebra-1","page":"Linear Algebra","title":"Linear Algebra","text":"","category":"section"},{"location":"manual/linalg/#","page":"Linear Algebra","title":"Linear Algebra","text":"GraphSignals.degrees","category":"page"},{"location":"manual/linalg/#","page":"Linear Algebra","title":"Linear Algebra","text":"GraphSignals.degree_matrix","category":"page"},{"location":"manual/linalg/#","page":"Linear Algebra","title":"Linear Algebra","text":"GraphSignals.inv_sqrt_degree_matrix","category":"page"},{"location":"manual/linalg/#","page":"Linear Algebra","title":"Linear Algebra","text":"GraphSignals.laplacian_matrix","category":"page"},{"location":"manual/linalg/#","page":"Linear Algebra","title":"Linear Algebra","text":"GraphSignals.normalized_laplacian","category":"page"},{"location":"basics/layers/#Building-layers-1","page":"Building layers","title":"Building layers","text":"","category":"section"},{"location":"#GeometricFlux:-The-Geometric-Deep-Learning-Library-in-Julia-1","page":"Home","title":"GeometricFlux: The Geometric Deep Learning Library in Julia","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"GeometricFlux is a framework for geometric deep learning/machine learning.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"It extends Flux machine learning library for geometric deep learning.\nIt supports of CUDA GPU with CUDA.jl\nIt integrates with JuliaGraphs ecosystems.\nIt supports generic graph neural network architectures (i.g. message passing scheme and graph network block)\nIt contains built-in GNN benchmark datasets (WIP)","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"] add GeometricFlux","category":"page"},{"location":"#Quick-start-1","page":"Home","title":"Quick start","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The basic graph convolutional network (GCN) is constructed as follow.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"model = Chain(GCNConv(adj_mat, num_features=>hidden, relu),\n              GCNConv(adj_mat, hidden=>target_catg),\n              softmax)","category":"page"},{"location":"#Load-dataset-1","page":"Home","title":"Load dataset","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Load cora dataset from GeometricFlux.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"using JLD2\nusing SparseArrays\n\n@load joinpath(pkgdir(GeometricFlux), \"data/cora_features.jld2\") features\n@load joinpath(pkgdir(GeometricFlux), \"data/cora_labels.jld2\") labels\n@load joinpath(pkgdir(GeometricFlux), \"data/cora_graph.jld2\") g","category":"page"},{"location":"#Training/testing-data-1","page":"Home","title":"Training/testing data","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Data is stored in sparse array, thus, we have to convert it into normal array.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"train_X = Matrix{Float32}(features)\ntrain_y = Matrix{Float32}(labels)\nadj_mat = Matrix{Float32}(adjacency_matrix(g))","category":"page"},{"location":"#Loss-function-1","page":"Home","title":"Loss function","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"loss(x, y) = logitcrossentropy(model(x), y)\naccuracy(x, y) = mean(onecold(model(x)) .== onecold(y))","category":"page"},{"location":"#Training-1","page":"Home","title":"Training","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"ps = Flux.params(model)\ntrain_data = [(train_X, train_y)]\nopt = ADAM()\nevalcb() = @show(accuracy(train_X, train_y))\n\n@epochs epochs Flux.train!(loss, ps, train_data, opt, cb=throttle(evalcb, 10))","category":"page"},{"location":"#Logs-1","page":"Home","title":"Logs","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"[ Info: Epoch 1\naccuracy(train_X, train_y) = 0.11669128508124077\n[ Info: Epoch 2\naccuracy(train_X, train_y) = 0.19608567208271788\n[ Info: Epoch 3\naccuracy(train_X, train_y) = 0.3098227474150665\n[ Info: Epoch 4\naccuracy(train_X, train_y) = 0.387370753323486\n[ Info: Epoch 5\naccuracy(train_X, train_y) = 0.44645494830132937\n[ Info: Epoch 6\naccuracy(train_X, train_y) = 0.46824224519940916\n[ Info: Epoch 7\naccuracy(train_X, train_y) = 0.48892171344165436\n[ Info: Epoch 8\naccuracy(train_X, train_y) = 0.5025849335302807\n[ Info: Epoch 9\naccuracy(train_X, train_y) = 0.5151403249630724\n[ Info: Epoch 10\naccuracy(train_X, train_y) = 0.5291728212703102\n[ Info: Epoch 11\naccuracy(train_X, train_y) = 0.543205317577548\n[ Info: Epoch 12\naccuracy(train_X, train_y) = 0.5550221565731167\n[ Info: Epoch 13\naccuracy(train_X, train_y) = 0.5638847858197932\n[ Info: Epoch 14\naccuracy(train_X, train_y) = 0.5657311669128509\n[ Info: Epoch 15\naccuracy(train_X, train_y) = 0.5749630723781388\n[ Info: Epoch 16\naccuracy(train_X, train_y) = 0.5834564254062038\n[ Info: Epoch 17\naccuracy(train_X, train_y) = 0.5919497784342689\n[ Info: Epoch 18\naccuracy(train_X, train_y) = 0.5978581979320532\n[ Info: Epoch 19\naccuracy(train_X, train_y) = 0.6019202363367799\n[ Info: Epoch 20\naccuracy(train_X, train_y) = 0.6067208271787297","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Check examples/gcn.jl for details.","category":"page"},{"location":"abstractions/gn/#Graph-network-block-1","page":"Graph network block","title":"Graph network block","text":"","category":"section"},{"location":"manual/utils/#Utilities-1","page":"Utilities","title":"Utilities","text":"","category":"section"}]
}
